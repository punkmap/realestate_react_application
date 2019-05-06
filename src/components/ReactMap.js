import React from 'react';
import EsriLoaderReact from 'esri-loader-react'
import { loadModules } from 'esri-loader'
import axios from 'axios'
import MapOverlayPanel from './molecules/MapOverlayPanel/MapOverlayPanel'
import './ReactMap.css'

//production
const nodeAppRoot = 'http://reactmaps/realestateapp/'
//production test
//const nodeAppRoot = 'http://reactmaps/realestateapp_test/'
//local
//const nodeAppRoot = 'http://localhost:4001/'
//local test
//const nodeAppRoot = 'http://localhost:4002/'

class ReactMap extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      ctrlKey: false
      , mapView: null
      , parcelsFL: null
      , projectsFL: null
      , parcelAddGL : null
      , selectedParcelGL: null
      , projectsAddPIN10s: null
      , project: null
      , phase:null
      , hideSidePanel: true
      , parcelData: null
      , realEstateData: null
      , realEstateDataLength: 0
    }
    this.mapClick = this.mapClick.bind(this);
    this.loadMap = this.loadMap.bind(this);
    this.loadExistingProjectsToMap = this.loadExistingProjectsToMap.bind(this);
  }
  componentDidMount(){
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
    const self = this
    function keyDown(e) {
      if (e.ctrlKey&&!self.state.ctrlKey){
        self.setState({ctrlKey: true})
      }
    }
    function keyUp(e) {
      if (self.state.ctrlKey){self.setState({ctrlKey: false})}
    }
  }
  loadMap = ({loadedModules: [Map, MapView, FeatureLayer, GraphicsLayer, watchUtils], containerNode}) => {
    const self = this;
    const flURL = 'https://maps.townofcary.org/arcgis/rest/services/Property/Property/MapServer/0'
    let fl = new FeatureLayer({
        url: flURL 
        , outFields: ["OBJECTID","PIN","PIN10","Realid","Owner","Owner2","OwnerAdd1","OwnerAdd2","OwnerAdd3","Location","CalcAcreage","DeedAcres","StreetNumber","StreetMisc","StreetPrefix","StreetName","StreetType","StreetSuffix","LandClass","Lclass","TotalStructures","TotalUnits","PropertyDesc","LotNum","BldgValue","LandValue","LandSaleValue","LandSaleDate","TotalSaleValue","TotalSaleDate","DeedBook","DeedPage","WC_City","Cary_City","WC_Etj","Topography","Township","APAOwnership","APAActivity","APAFunction","APAStructure","APASite","WC_Zoning","BillingClass","APAOwnershipDesc","APAActivityDesc","APAFunctionDesc","APAStructureDesc","APASiteDesc","County","TotalBldgSqFt","Typeanduse","Typedecode","PhyCity","PhyZip","Utilities","OwnerWholeName"]
        , popupTemplate: null
    });
    fl.minScale = 2257;
    fl.when(function(featureLayer){
      featureLayer.id = 'parcels';
      self.setState({parcelsFL: featureLayer});
    });
    fl.renderer = {
      type: "simple"  // autocasts as new SimpleRenderer()
      , symbol: {
        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
        color: [ 255, 255, 0, 0.1 ],
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 1,
          color: "white"
        }
      }
    }
    
    const parcelAddGL = new GraphicsLayer({
      visible:true
      , id: 'parcelAddGL'
    })
    parcelAddGL.watch('graphics.length', function(newValue, oldValue, property, object) {
      newValue!==0?self.setState({hideSidePanel: false}):self.setState({hideSidePanel: true})
    });
    self.setState({parcelAddGL:parcelAddGL})
    
    const selectedParcelGL = new GraphicsLayer({
      visible:true
      , id: 'selectedParcelGL'
    })
    self.setState({selectedParcelGL:selectedParcelGL})

    let map = new Map({basemap: 'satellite'})
    map.addMany([fl, parcelAddGL, selectedParcelGL])
    self.loadExistingProjectsToMap(map)
    let mv = new MapView({
      container: containerNode
      , center: [-78.78004, 35.78961]
      , zoom: 18
      , map: map
    }).when((function(mapView){
        self.setState({mapView:mapView})
        mapView.on('click', self.mapClick)
        mapView.popup.highlightEnabled = false;
        mapView.popup.actions = {}
        // mapView.popup.watch('visible', function(e){
        //   if(e){self.setReactPopupContent()}
        // })
    }));
  }
  refreshProjectFL = (callback) =>{
    const self = this;
    axios({
      method: 'post'
      , url: nodeAppRoot+'getprojectparcels'
    })
    .then(function(response){
      const array = response.data
      self.setState({projectsAddPIN10s:array});
      const list = array.map(s => `'${s}'`).join(', ');
      self.state.projectsFL.definitionExpression = `PIN10 in (${list})`
      callback({'status':'success'})
    })
    .catch(function (error) {
      callback({'status':'error'})
    });
  }
  loadExistingProjectsToMap = (map) => {
    const self = this
    loadModules(['esri/layers/FeatureLayer']).then(([FeatureLayer]) => {
        const flURL = 'https://maps.townofcary.org/arcgis/rest/services/Property/Property/MapServer/0'
        let fl = new FeatureLayer({
          url: flURL 
          , outFields: ["*"]
          , popupEnabled:false
        });
        fl.minScale = 2257;
        fl.when(function(featureLayer){
          featureLayer.id = 'projects';
          self.setState({projectsFL: featureLayer});
          map.reorder(self.state.parcelAddGL, 3)
          map.reorder(self.state.selectedParcelGL,4)
          // map.layers.forEach(function(layer){
          //   console.log('layer.id: ' + layer.id)
          // })
          
          self.refreshProjectFL(function(status){})
        });
        fl.renderer = {
          type: "simple"  // autocasts as new SimpleRenderer()
          , symbol: {
            type: "simple-fill",  // autocasts as new SimpleFillSymbol()
            color: [ 255, 0, 0, 0.4 ],
            outline: {  // autocasts as new SimpleLineSymbol()
              width: 4,
              color: "red"
            }
          }
        }
        map.add(fl);
    })
  }
  // setReactPopupContent = () => {
  //   const self = this
    
  //   let puNode = document.createElement("div");
  //   //const popupContent = document.getElementsByClassName('.esri-popup__content');
  //   self.state.mapView.popup.content = puNode
    
  //   ReactDOM.render(
  //     <PopUp parcelData={self.state.parcelData} realEstateData={self.state.realEstateData}/>,
  //     puNode
  //   );
  // }
  addFeature = (e) => {
    console.log('addFeature')
  }
  mapClick = (e) => {
    //console.log('quit clicking me mapPoint: ' + JSON.stringify(e.mapPoint));
      this.selectParcel(e.mapPoint) 
      
  }
  selectParcel = (mapPoint) => {
    const self = this;
    loadModules(['esri/tasks/QueryTask','esri/tasks/support/Query'])
    .then(([QueryTask,Query]) => 
    {
      let parcels = this.state.parcelsFL;
      let URL = parcels.url+'/'+parcels.layerId;  
      //console.log('URL: '+ URL);
      var qTask = new QueryTask({
          url: URL
        });  
        var params = new Query({
              returnGeometry: true
              , outFields: ['PIN','PIN10','RealId','Owner','OwnerWholeName','Owner2','OwnerAdd1','OwnerAdd2','OwnerAdd3','DeedBook','DeedPage','Location','StreetNumber','StreetPrefix','StreetName','StreetType']
              , geometry: mapPoint
              , spatialRelationship: 'intersects'
        });
        qTask.execute(params)
        .then(function(response){
            if (response.features.length>0){
              // console.log('response.features[0]: ' + JSON.stringify(response.features[0]));
              self.addGraphicToProjectSet(response.features[0])
              let thisParcel = JSON.parse(JSON.stringify(response.features[0]))
              let fillSymbol = {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                style: 'diagonal-cross',
                color: "00FFFF",
                outline: { // autocasts as new SimpleLineSymbol()
                  color: "00FFFF",
                  width: 1
                }
              };
              thisParcel.symbol = fillSymbol
              thisParcel.geometry.type = 'polygon'
              console.log()
              self.state.selectedParcelGL.removeAll()
              self.state.selectedParcelGL.add(thisParcel)
              console.log('parceladded')
              const PIN10 = response.features[0].attributes.PIN10 
              axios.post(nodeAppRoot+'getprojectattributes/'+JSON.stringify(PIN10)).then(function(response){
                const resData = response.data;
                if(response.status===200){
                  console.log('resData: '+ JSON.stringify(resData));
                  console.log('resData.length: ' + resData.length)
                  self.setState({realEstateData: resData})
                  self.setState({realEstateDataLength: resData.length})
                  // self.state.mapView.popup.open({
                  //   title: PIN10
                  //   , location : e.mapPoint
                  // })
                }
                else{
                  console.log('realEstate data failed')
                }
              })
              .catch(function (error) {
                console.log('error: ' + error)
              });
            }
            else{
              self.state.parcelAddGL.removeAll()
              self.state.selectedParcelGL.removeAll()
              self.state.mapView.graphics.removeAll()
              self.setState({realEstateData: null})
              self.setState({realEstateDataLength: 0})
            }
            let parcelData = JSON.parse(JSON.stringify(response.features[0].attributes))
            self.deleteObjectKeys(parcelData,['Location','StreetNumber','StreetPrefix','StreetName','StreetType'])
            self.setState({parcelData: parcelData})
        })
        .catch(function(error){
            console.log('error: ' + JSON.stringify(error));
        });
    })
    .catch(err => {
      // handle any errors
      console.error(err);
    });
  }
  deleteObjectKeys = (object,keys) => {
    keys.forEach(function(key){
      delete object[key]
    })
    return
  }
  addGraphicToProjectSet = (graphic) =>{
    const self = this
    //loadModules(['esri/Graphic']).then(([Graphic]) => {
      var fillSymbol = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: [0, 255, 255, 0.1],
        outline: { // autocasts as new SimpleLineSymbol()
          color: "00FFFF",
          width: 5
        }
      }
      graphic.symbol = fillSymbol
      if(!self.state.ctrlKey){
        self.state.parcelAddGL.removeAll();
        self.state.selectedParcelGL.removeAll()
      }
      
      if(!self.graphicInGraphicsLayer(graphic, self.state.parcelAddGL, 'PIN')){
        self.state.parcelAddGL.add(graphic)
      }
  }
  graphicInGraphicsLayer = (G, GL, idField) =>{
    let inGL = false
    GL.graphics.forEach(function(g){
      if(g.attributes[idField]===G.attributes[idField]){
        inGL = true
      }
    })
    return inGL
  }
  removeGraphicById = (G, GL, idField) =>{
    let removeGraphics = []
    GL.graphics.forEach(function(g){
      if(g.attributes[idField]===G.attributes[idField]){
        removeGraphics.push(g)
      }
    })
    
    GL.removeMany(removeGraphics)
  }
  getSelectedProperties = () => {
    const self = this
    let parceldata = []
    let array = self.state.projectsAddPIN10s
    this.state.parcelAddGL.graphics.forEach(function(g){
      let attr = g.attributes
      if(array.indexOf(attr.PIN10)===-1){
        array.push(attr.PIN10)
      } 
      delete attr.RealLink
      delete attr.DeedLink
      attr.Project = self.state.project
      attr.Phase = self.state.phase
      parceldata.push(attr)
    }) 
    return parceldata
  }
  addSelectedProperties = () => {
    const self = this;  
    let array = self.state.projectsAddPIN10s
    const parceldata = self.getSelectedProperties()
    axios.post(nodeAppRoot+'addparcels/'+JSON.stringify(parceldata)).then(function(response){
        const resData = response.data;
      if(resData.status==='success'){
        self.refreshProjectFL(function(status){
          self.state.parcelAddGL.removeAll()
          self.state.selectedParcelGL.removeAll()
          self.state.mapView.graphics.removeAll()
          self.setState({realEstateData: null})
          self.setState({realEstateDataLength: 0})
        })
      }
      else if (resData.status==='warning'){
          alert(resData.message)    
      }
    })
    .catch(function (error) {
      console.log('error: ' + error)
    });
  }
  deleteSelectedProperties = () => {
    const self = this;  
    const parceldata = self.getSelectedProperties()
    axios.post(nodeAppRoot+'deleteparcels/'+JSON.stringify(parceldata)).then(function(response){
      const resData = response.data;
      if(resData.status==='success'){
        self.refreshProjectFL(function(status){
          self.state.parcelAddGL.removeAll()
          self.state.selectedParcelGL.removeAll()
          self.state.mapView.graphics.removeAll()
          self.setState({realEstateData: null})
          self.setState({realEstateDataLength: 0})
        })
      }
      else if (resData.status==='warning'){
          alert(resData.message)    
      }

    })
    .catch(function (error) {
      console.log('error: ' + error)
    });
  }
  setProjectCallback = (value) =>{
    const self = this
    this.setState({project:value})
  }
  setPhaseCallback = (value) =>{
    this.setState({phase:value})
  }
  selectParcelFromSearch = (mapPoint) =>{
    this.selectParcel(mapPoint) 
  }
  render() {

    //var fl = new FeatureLayer(url);

    const options = {
      url: 'https://js.arcgis.com/4.10/'
    };

    return (
      <div className="ReactMap">
        <EsriLoaderReact 
          options={options}
          modulesToLoad={['esri/Map', 'esri/views/MapView','esri/layers/FeatureLayer', 'esri/layers/GraphicsLayer', 'esri/core/watchUtils']}    
          onReady={this.loadMap}
        />
        <MapOverlayPanel 
          view={this.state.mapView} 
          resultPinDragable={true}
          hideSidePanel={this.state.hideSidePanel} 
          addSelectedProperties = {this.addSelectedProperties}
          deleteSelectedProperties = {this.deleteSelectedProperties}
          projectCallback = {this.setProjectCallback}
          phaseCallback = {this.setPhaseCallback}
          selectParcelCallback={this.selectParcelFromSearch}
          realEstateData = {this.state.realEstateData}
          realEstateDataLength={this.state.realEstateDataLength}
          parcelData = {this.state.parcelData}
        />
        
      </div>
    );
  }
}

export default ReactMap;