(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(e,t,a){e.exports=a.p+"static/media/PushPin.d22b5a3d.png"},208:function(e,t,a){e.exports=a(499)},213:function(e,t,a){},235:function(e,t,a){},399:function(e,t,a){},490:function(e,t,a){},496:function(e,t,a){},497:function(e,t,a){},498:function(e,t,a){},499:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(16),s=a.n(l),c=a(18),o=a(19),i=a(21),d=a(20),p=a(22),u=(a(213),a(55)),h=a(7),m=a(195),g=a(43),b=a(67),f=a.n(b),v=(a(235),a(196)),j=a.n(v),P=a(34),E=a.n(P),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={searchWidget:null},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;Object(g.loadModules)(["esri/widgets/Search","esri/layers/GraphicsLayer","esri/Graphic","esri/symbols/PictureMarkerSymbol","esri/geometry/support/webMercatorUtils","esri/tasks/Locator"]).then(function(t){var a=Object(u.a)(t,6),r=a[0],n=a[1],l=a[2],s=a[3],c=a[4],o=a[5];if(null==e.state.searchWidget&&null!=e.props.view&&null!=e.props.view.map){var i=e.props.view,d=new r({view:i,container:"searchWidget",locationEnabled:!1,resultGraphicEnabled:!1}),p=d.get("sources");p.push({featureLayer:{url:"https://maps.townofcary.org/arcgis1/rest/services/Property/Property/MapServer/0"},searchFields:["PIN10"],displayField:"PIN10",exactMatch:!1,outFields:["PIN10"],name:"Property PIN10",placeholder:"PIN10: 0764523393"},{locator:new o("https://maps.townofcary.org/arcgis1/rest/services/Locators/Cary_Com_Locator/GeocodeServer"),singleLineFieldName:"SingleLine",outFields:["*"],name:"ToC Locator",autoNavigate:!0,maxSuggestions:3,placeholder:"Address: 120 Wilkinson Ave"}),d.set("sources",p),d.activeSourceIndex=1,e.setState({searchWidget:d});var h=new n;e.props.view.map.add(h,5);var m,g,b=new s({url:j.a,height:"48px",width:"48px"});if(d.on("search-complete",function(t){var a=c.webMercatorToGeographic(t.results[0].results[0].feature.geometry),r=new l({geometry:a,symbol:b});console.log("event.activeSourceIndex: "+t.activeSourceIndex),1!==t.activeSourceIndex&&2!==t.activeSourceIndex||e.props.selectParcelCallback(a.centroid),h.graphics.add(r)}),1==e.props.resultPinDragable)i.on("drag",function(e){if("start"===e.action)i.hitTest(e).then(function(t){t.results[0].graphic&&"point"===t.results[0].graphic.geometry.type&&(e.stopPropagation(),m=t.results[0].graphic)});else if("update"===e.action)m&&(e.stopPropagation(),g?h.remove(g):h.remove(m),(g=m.clone()).geometry=i.toMap(e),h.add(g));else if("end"===e.action&&m){e.stopPropagation(),g&&h.remove(g);var t=m.clone();t.geometry=g.geometry.clone(),h.add(t),m=null,g=null}})}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"mapSearch"},n.a.createElement(E.a,{container:!0,spacing:16,alignItems:"center",direction:"row",justify:"center"},n.a.createElement("div",{id:"searchWidget"})))}}]),t}(r.Component),S=a(66),O=a(6),D=a.n(O),w=a(9),C=a.n(w),k=a(198),A=a.n(k),N=a(199),L=a.n(N),x=a(120),I=a.n(x),F=a(121),T=a.n(F),G=a(202),M=a.n(G),_=a(123),B=a.n(_),R=a(201),W=a.n(R),J=a(204),V=a.n(J),U=a(203),K=a.n(U),H=a(82),z=a.n(H),Y=a(65),Z=a.n(Y),q=a(124),Q=a.n(q),X=a(200),$=a.n(X),ee=a(63),te=a.n(ee),ae=a(122),re=a.n(ae),ne=a(81),le=a.n(ne),se=a(68),ce=a.n(se);a(399);var oe=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).update=function(e){a.props.onUpdate(e.target.value),a.setState({fieldVal:e.target.value})},a.handleChange=function(e){return function(t){"project"===e||"project_delete"===e?a.props.projectCallback(t.target.value):a.props.phaseCallback(t.target.value),a.setState(Object(S.a)({},e,t.target.value),function(){console.log("this.state.project_delete: "+a.state.project_delete),console.log("this.state.phase_delete: "+a.state.phase_delete),a.state.project&&a.state.phase?a.setState({disableAddButton:!1}):a.setState({disableAddButton:!0}),a.state.project_delete&&a.state.phase_delete?a.setState({disableDeleteButton:!1}):a.setState({disableDeleteButton:!0})})}},a.menuClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(e){return function(t){"add"===e?a.setState({titleBarTitle:"Add Project"}):a.setState({titleBarTitle:"Remove Project"}),a.setState({editAction:e}),a.setState({anchorEl:null})}},a.getPointerEvents=function(){return!0},a.componentDidMount=function(){a.sideNav=n.a.createRef()},a.addProject=function(){a.setState({project:""}),a.setState({phase:""}),a.setState({disableAddButton:!0}),a.props.addSelectedProperties()},a.removeProject=function(){a.setState({project_delete:""}),a.setState({phase_delete:""}),a.setState({disableDeleteButton:!0}),a.props.deleteSelectedProperties()};a.props.classes;return a.state={project:"",phase:"",project_delete:"",phase_delete:"",disableAddButton:!0,showDeleteButton:!0,anchorEl:null,editAction:"add",titleBarTitle:"Add Project",pointerEvents:"auto"},a.menuClick=a.menuClick.bind(Object(h.a)(Object(h.a)(a))),a.handleClose=a.handleClose.bind(Object(h.a)(Object(h.a)(a))),a.sideNav=n.a.createRef(),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.props.classes;return n.a.createElement(L.a,{muiTheme:I()(A.a)},n.a.createElement("div",null,n.a.createElement(te.a,{in:!this.props.hideSidePanel,timeout:1e3},n.a.createElement(re.a,{className:D()("sidePanel",Object(S.a)({},e.pointerEventsAuto,!1===this.props.hideSidePanel))},n.a.createElement($.a,{className:e.appBar,title:this.state.titleBarTitle,iconElementLeft:n.a.createElement(T.a,{color:"inherit","aria-label":"Menu","aria-owns":this.state.anchorEl?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.menuClick},n.a.createElement(W.a,null))},n.a.createElement(M.a,{id:"simple-menu",anchorEl:this.state.anchorEl,open:Boolean(this.state.anchorEl),onChange:this.handleClose},n.a.createElement(B.a,{onClick:this.handleClose("add")},"Add"),n.a.createElement(B.a,{onClick:this.handleClose("remove")},"Remove"))),"add"===this.state.editAction?n.a.createElement(le.a,{margin:"normal"},n.a.createElement(ce.a,{id:"tf_project",label:"Project Number",className:e.TextField,value:this.state.project,onChange:this.handleChange("project"),margin:"normal",variant:"outlined"}),n.a.createElement(ce.a,{id:"tf_phase",label:"Phase",className:e.TextField,value:this.state.phase,onChange:this.handleChange("phase"),margin:"normal",variant:"outlined"}),n.a.createElement(Q.a,{variant:"extended",disabled:this.state.disableAddButton,color:"primary","aria-label":"Add",className:e.addButton,onClick:this.addProject},n.a.createElement(K.a,{className:e.extendedIcon}),n.a.createElement("b",null,"Add Selection"))):n.a.createElement(le.a,{margin:"normal"},n.a.createElement(ce.a,{id:"tf_project_delete",label:"Project Number",className:e.textField,value:this.state.project_delete,onChange:this.handleChange("project_delete"),margin:"normal",variant:"outlined"}),n.a.createElement(ce.a,{id:"tf_phase_delete",label:"Phase",className:e.textField,value:this.state.phase_delete,onChange:this.handleChange("phase_delete"),margin:"normal",variant:"outlined"}),n.a.createElement(Q.a,{variant:"extended",disabled:this.state.disableDeleteButton,color:"primary","aria-label":"Delete",className:e.deleteButton,onClick:this.removeProject},n.a.createElement(V.a,{className:e.extendedIcon}),n.a.createElement("b",null,"Delete Project")))))))}}]),t}(r.Component),ie=C()(function(e){return{appBar:{position:"relative"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},pointerEventsAuto:{pointerEvents:"auto"},paper:{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit},type:{width:"100%",maxWidth:500,paddingLeft:15},typeTitle:{paddingTop:5},addButton:{color:e.palette.getContrastText(z.a[500]),backgroundColor:z.a[500],"&:hover":{backgroundColor:z.a[700]}},deleteButton:{color:e.palette.getContrastText(Z.a[500]),backgroundColor:Z.a[500],"&:hover":{backgroundColor:Z.a[700]}},extendedIcon:{marginRight:2*e.spacing.unit}}})(oe),de=a(64),pe=a(125),ue=a.n(pe),he=a(205),me=a.n(he),ge=a(206),be=a.n(ge),fe=a(79),ve=a.n(fe),je=a(80),Pe=a.n(je),Ee=a(127),ye=a.n(Ee),Se=a(126),Oe=a.n(Se),De=(a(490),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).nextRecord=function(){a.setState({pageIndex:a.state.pageIndex+1})},a.lastRecord=function(){a.setState({pageIndex:a.state.pageIndex-1})},a.state={pageIndex:0,pageCount:null,parcelData:null,hasError:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){var e={};e.parcelData={label:"Parcel Data:",data:this.props.parcelData},e.realEstate={label:"Real Estate Data:",data:this.props.realEstateData}}},{key:"componentWillReceiveProps",value:function(){this.state.parcelData!==this.props.parcelData&&(this.setState({parcelData:this.props.parcelData}),this.setState({pageIndex:0}))}},{key:"render",value:function(){var e=this,t=this.props.classes,a={};return a.parcelData={label:"Parcel Data:",data:this.props.parcelData},a.realEstateData={label:"Real Estate Data:",data:this.props.realEstateData},n.a.createElement(te.a,{in:null!=this.props.realEstateData&&null!=this.props.parcelData,timeout:1},n.a.createElement("div",{className:D()("infoPanel",Object(S.a)({},t.pointerEventsAuto,null!=this.props.realEstateData&&null!=this.props.parcelData))},n.a.createElement("div",{className:"header"},n.a.createElement(E.a,{container:!0,spacing:16,alignItems:"center",direction:"row",justify:"center"},n.a.createElement(E.a,{item:!0,xs:!0},n.a.createElement(ue.a,{disabled:0===this.state.pageIndex,className:t.button,onClick:this.lastRecord},n.a.createElement(me.a,null))),n.a.createElement(E.a,{item:!0,xs:6},a.parcelData.data?n.a.createElement("h2",null,"PIN: ",a.parcelData.data.PIN):null),n.a.createElement(E.a,{item:!0,xs:!0},n.a.createElement(ue.a,{disabled:this.state.pageIndex===this.props.realEstateDataLength,className:t.button,onClick:this.nextRecord},n.a.createElement(be.a,null))))),n.a.createElement("div",{className:"body"},n.a.createElement(E.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch"},0===this.state.pageIndex&&null!==a.parcelData.data&&null!==a.parcelData?n.a.createElement(ve.a,{className:t.list,subheader:n.a.createElement("li",null)},n.a.createElement("li",{key:"section-".concat(a.parcelData.label),className:t.listSection},"{}"!=JSON.stringify(a.parcelData.data)&&n.a.createElement("ul",{className:t.ul},n.a.createElement(Oe.a,{disableGutters:!0,className:t.subHeader},"".concat(a.parcelData.label)),Object.keys(a.parcelData.data).map(function(e){return n.a.createElement(Pe.a,{key:"item-".concat(a.parcelData.label,"-").concat(e)},n.a.createElement(ye.a,{primary:"".concat(e," : ").concat(a.parcelData.data[e])}))})))):this.state.pageIndex>0&&a.realEstateData?n.a.createElement(ve.a,{className:t.list,subheader:n.a.createElement("li",null)},a.realEstateData.data&&n.a.createElement("li",{key:"section-".concat(a.realEstateData.label),className:t.listSection},0!==a.realEstateData.data.length&&n.a.createElement("ul",{className:t.ul},n.a.createElement(Oe.a,{disableGutters:!0,className:t.subHeader},"".concat(a.realEstateData.label," ")+this.state.pageIndex),Object.keys(a.realEstateData.data[this.state.pageIndex-1]).map(function(t){return n.a.createElement(Pe.a,{key:"item-".concat(a.realEstateData.label,"-").concat(t)},n.a.createElement(ye.a,{primary:"".concat(t," : ").concat(a.realEstateData.data[e.state.pageIndex-1][t])}))})))):null))))}}]),t}(r.Component)),we=Object(de.withStyles)(function(e){return{button:{margin:e.spacing.unit,pointerEvents:"auto"},list:{width:"100%",height:"100%",position:"relative",margin:0},listSection:{height:"100%",backgroundColor:"inherit",listStyleType:"none",width:"100%"},ul:{backgroundColor:"inherit",padding:0,margin:0},subHeader:{fontSize:"2rem",backgroundColor:"#E8E8E8"},pointerEventsAuto:{pointerEvents:"auto"}}})(De),Ce=a(207),ke=a.n(Ce),Ae=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={pageIndex:0},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate")}},{key:"componentWillReceiveProps",value:function(){console.log("componentWillRecieveProps")}},{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:e.root},n.a.createElement(ke.a,{url:"https://services.townofcary.org/services/oauth2/authorize?response_type=code&client_id=3MVG9ahGHqp.k2_wCB9MiYn6942wDO3E1981n4v3eG6Pxe5WwKTni6j3J9AiN0cgpU1Z4cgmk1YVN7MIYN74r&redirect_uri=https://carync--test.lightning.force.com/lightning/page/chatter",width:"450px",height:"450px",id:"myId",className:"myClassname",display:"initial",position:"relative",allowFullScreen:!0}))}}]),t}(r.Component),Ne=(Object(de.withStyles)(function(e){return{root:{height:"40em",width:"40em",position:"relative",top:"20em",backgroundColor:e.palette.background.paper}}})(Ae),a(496),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).setProjectCallback=function(e){a.props.projectCallback(e)},a.setPhaseCallback=function(e){a.props.phaseCallback(e)},a.componentDidUpdate=function(){},a.state={hideSidePanel:!0},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"mapOverlayPanel"},n.a.createElement(E.a,{container:!0,spacing:0,alignItems:"center",direction:"row",justify:"center"},n.a.createElement(y,{selectParcelCallback:this.props.selectParcelCallback,view:this.props.view,resultPinDragable:!0}),n.a.createElement(ie,{ref:"sidePanel",hideSidePanel:this.props.hideSidePanel,addSelectedProperties:this.props.addSelectedProperties,deleteSelectedProperties:this.props.deleteSelectedProperties,projectCallback:this.setProjectCallback,phaseCallback:this.setPhaseCallback}),n.a.createElement(we,{parcelData:this.props.parcelData,realEstateData:this.props.realEstateData,realEstateDataLength:this.props.realEstateDataLength})))}}]),t}(r.Component)),Le=(a(497),"http://reactmaps/realestateapp_test/"),xe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).loadMap=function(e){var t=Object(u.a)(e.loadedModules,5),r=t[0],n=t[1],l=t[2],s=t[3],c=(t[4],e.containerNode),o=Object(h.a)(Object(h.a)(a)),i=new l({url:"https://maps.townofcary.org/arcgis/rest/services/Property/Property/MapServer/0",outFields:["OBJECTID","PIN","PIN10","Realid","Owner","Owner2","OwnerAdd1","OwnerAdd2","OwnerAdd3","Location","CalcAcreage","DeedAcres","StreetNumber","StreetMisc","StreetPrefix","StreetName","StreetType","StreetSuffix","LandClass","Lclass","TotalStructures","TotalUnits","PropertyDesc","LotNum","BldgValue","LandValue","LandSaleValue","LandSaleDate","TotalSaleValue","TotalSaleDate","DeedBook","DeedPage","WC_City","Cary_City","WC_Etj","Topography","Township","APAOwnership","APAActivity","APAFunction","APAStructure","APASite","WC_Zoning","BillingClass","APAOwnershipDesc","APAActivityDesc","APAFunctionDesc","APAStructureDesc","APASiteDesc","County","TotalBldgSqFt","Typeanduse","Typedecode","PhyCity","PhyZip","Utilities","OwnerWholeName"],popupTemplate:null});i.minScale=2257,i.when(function(e){e.id="parcels",o.setState({parcelsFL:e})}),i.renderer={type:"simple",symbol:{type:"simple-fill",color:[255,255,0,.1],outline:{width:1,color:"white"}}};var d=new s({visible:!0,id:"parcelAddGL"});d.watch("graphics.length",function(e,t,a,r){0!==e?o.setState({hideSidePanel:!1}):o.setState({hideSidePanel:!0})}),o.setState({parcelAddGL:d});var p=new s({visible:!0,id:"selectedParcelGL"});o.setState({selectedParcelGL:p});var m=new r({basemap:"satellite"});m.addMany([i,d,p]),o.loadExistingProjectsToMap(m);new n({container:c,center:[-78.78004,35.78961],zoom:18,map:m}).when(function(e){o.setState({mapView:e}),e.on("click",o.mapClick),e.popup.highlightEnabled=!1,e.popup.actions={}})},a.refreshProjectFL=function(e){var t=Object(h.a)(Object(h.a)(a));f()({method:"post",url:Le+"getprojectparcels"}).then(function(a){var r=a.data;t.setState({projectsAddPIN10s:r});var n=r.map(function(e){return"'".concat(e,"'")}).join(", ");t.state.projectsFL.definitionExpression="PIN10 in (".concat(n,")"),e({status:"success"})}).catch(function(t){e({status:"error"})})},a.loadExistingProjectsToMap=function(e){var t=Object(h.a)(Object(h.a)(a));Object(g.loadModules)(["esri/layers/FeatureLayer"]).then(function(a){var r=new(0,Object(u.a)(a,1)[0])({url:"https://maps.townofcary.org/arcgis/rest/services/Property/Property/MapServer/0",outFields:["*"],popupEnabled:!1});r.minScale=2257,r.when(function(a){a.id="projects",t.setState({projectsFL:a}),e.reorder(t.state.parcelAddGL,3),e.reorder(t.state.selectedParcelGL,4),t.refreshProjectFL(function(e){})}),r.renderer={type:"simple",symbol:{type:"simple-fill",color:[255,0,0,.4],outline:{width:4,color:"red"}}},e.add(r)})},a.addFeature=function(e){console.log("addFeature")},a.mapClick=function(e){a.selectParcel(e.mapPoint)},a.selectParcel=function(e){var t=Object(h.a)(Object(h.a)(a));Object(g.loadModules)(["esri/tasks/QueryTask","esri/tasks/support/Query"]).then(function(r){var n=Object(u.a)(r,2),l=n[0],s=n[1],c=a.state.parcelsFL,o=new l({url:c.url+"/"+c.layerId}),i=new s({returnGeometry:!0,outFields:["PIN","PIN10","RealId","Owner","OwnerWholeName","Owner2","OwnerAdd1","OwnerAdd2","OwnerAdd3","DeedBook","DeedPage","Location","StreetNumber","StreetPrefix","StreetName","StreetType"],geometry:e,spatialRelationship:"intersects"});o.execute(i).then(function(e){if(e.features.length>0){t.addGraphicToProjectSet(e.features[0]);var a=JSON.parse(JSON.stringify(e.features[0]));a.symbol={type:"simple-fill",style:"diagonal-cross",color:"00FFFF",outline:{color:"00FFFF",width:1}},a.geometry.type="polygon",console.log(),t.state.selectedParcelGL.removeAll(),t.state.selectedParcelGL.add(a),console.log("parceladded");var r=e.features[0].attributes.PIN10;f.a.post(Le+"getprojectattributes/"+JSON.stringify(r)).then(function(e){var a=e.data;200===e.status?(console.log("resData: "+JSON.stringify(a)),console.log("resData.length: "+a.length),t.setState({realEstateData:a}),t.setState({realEstateDataLength:a.length})):console.log("realEstate data failed")}).catch(function(e){console.log("error: "+e)})}else t.state.parcelAddGL.removeAll(),t.state.selectedParcelGL.removeAll(),t.state.mapView.graphics.removeAll(),t.setState({realEstateData:null}),t.setState({realEstateDataLength:0});var n=JSON.parse(JSON.stringify(e.features[0].attributes));t.deleteObjectKeys(n,["Location","StreetNumber","StreetPrefix","StreetName","StreetType"]),t.setState({parcelData:n})}).catch(function(e){console.log("error: "+JSON.stringify(e))})}).catch(function(e){console.error(e)})},a.deleteObjectKeys=function(e,t){t.forEach(function(t){delete e[t]})},a.addGraphicToProjectSet=function(e){var t=Object(h.a)(Object(h.a)(a));e.symbol={type:"simple-fill",color:[0,255,255,.1],outline:{color:"00FFFF",width:5}},t.state.ctrlKey||(t.state.parcelAddGL.removeAll(),t.state.selectedParcelGL.removeAll()),t.graphicInGraphicsLayer(e,t.state.parcelAddGL,"PIN")||t.state.parcelAddGL.add(e)},a.graphicInGraphicsLayer=function(e,t,a){var r=!1;return t.graphics.forEach(function(t){t.attributes[a]===e.attributes[a]&&(r=!0)}),r},a.removeGraphicById=function(e,t,a){var r=[];t.graphics.forEach(function(t){t.attributes[a]===e.attributes[a]&&r.push(t)}),t.removeMany(r)},a.getSelectedProperties=function(){var e=Object(h.a)(Object(h.a)(a)),t=[],r=e.state.projectsAddPIN10s;return a.state.parcelAddGL.graphics.forEach(function(a){var n=a.attributes;-1===r.indexOf(n.PIN10)&&r.push(n.PIN10),delete n.RealLink,delete n.DeedLink,n.Project=e.state.project,n.Phase=e.state.phase,t.push(n)}),t},a.addSelectedProperties=function(){var e=Object(h.a)(Object(h.a)(a)),t=(e.state.projectsAddPIN10s,e.getSelectedProperties());f.a.post(Le+"addparcels/"+JSON.stringify(t)).then(function(t){var a=t.data;"success"===a.status?e.refreshProjectFL(function(t){e.state.parcelAddGL.removeAll(),e.state.selectedParcelGL.removeAll(),e.state.mapView.graphics.removeAll(),e.setState({realEstateData:null}),e.setState({realEstateDataLength:0})}):"warning"===a.status&&alert(a.message)}).catch(function(e){console.log("error: "+e)})},a.deleteSelectedProperties=function(){var e=Object(h.a)(Object(h.a)(a)),t=e.getSelectedProperties();f.a.post(Le+"deleteparcels/"+JSON.stringify(t)).then(function(t){var a=t.data;"success"===a.status?e.refreshProjectFL(function(t){e.state.parcelAddGL.removeAll(),e.state.selectedParcelGL.removeAll(),e.state.mapView.graphics.removeAll(),e.setState({realEstateData:null}),e.setState({realEstateDataLength:0})}):"warning"===a.status&&alert(a.message)}).catch(function(e){console.log("error: "+e)})},a.setProjectCallback=function(e){Object(h.a)(Object(h.a)(a));a.setState({project:e})},a.setPhaseCallback=function(e){a.setState({phase:e})},a.selectParcelFromSearch=function(e){a.selectParcel(e)},a.state={ctrlKey:!1,mapView:null,parcelsFL:null,projectsFL:null,parcelAddGL:null,selectedParcelGL:null,projectsAddPIN10s:null,project:null,phase:null,hideSidePanel:!0,parcelData:null,realEstateData:null,realEstateDataLength:0},a.mapClick=a.mapClick.bind(Object(h.a)(Object(h.a)(a))),a.loadMap=a.loadMap.bind(Object(h.a)(Object(h.a)(a))),a.loadExistingProjectsToMap=a.loadExistingProjectsToMap.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",function(t){t.ctrlKey&&!e.state.ctrlKey&&e.setState({ctrlKey:!0})}),document.addEventListener("keyup",function(t){e.state.ctrlKey&&e.setState({ctrlKey:!1})});var e=this}},{key:"render",value:function(){return n.a.createElement("div",{className:"ReactMap"},n.a.createElement(m.a,{options:{url:"https://js.arcgis.com/4.10/"},modulesToLoad:["esri/Map","esri/views/MapView","esri/layers/FeatureLayer","esri/layers/GraphicsLayer","esri/core/watchUtils"],onReady:this.loadMap}),n.a.createElement(Ne,{view:this.state.mapView,resultPinDragable:!0,hideSidePanel:this.state.hideSidePanel,addSelectedProperties:this.addSelectedProperties,deleteSelectedProperties:this.deleteSelectedProperties,projectCallback:this.setProjectCallback,phaseCallback:this.setPhaseCallback,selectParcelCallback:this.selectParcelFromSearch,realEstateData:this.state.realEstateData,realEstateDataLength:this.state.realEstateDataLength,parcelData:this.state.parcelData}))}}]),t}(n.a.PureComponent),Ie=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(xe,null))}}]),t}(r.Component);a(498);s.a.render(n.a.createElement(Ie,null),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.f5cfd8cb.chunk.js.map