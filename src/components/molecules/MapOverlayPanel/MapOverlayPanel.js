import React, { Component } from 'react'
//import { loadModules } from 'esri-loader'
import MapSearch from '../MapSearch/MapSearch'
import SidePanel from '../../SidePanel'
import InfoPanel from '../InfoPanel/InfoPanel'
import Chatter from '../../organisms/Chatter'
import './MapOverlayPanel.css'
import Grid from '@material-ui/core/Grid'
class MapOverlayPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      hideSidePanel: true
    }
  } 
  setProjectCallback = (value) =>{
    //this.setState({project:value})
    this.props.projectCallback(value)
  }
  setPhaseCallback = (value) =>{
    //this.setState({phase:value})
    this.props.phaseCallback(value)
  }
  componentDidUpdate = () => {
  }
  render() {
    return (
      <div className="mapOverlayPanel">
        <Grid
          container
          spacing={0}
          alignItems="center"
          direction="row"
          justify="center"
        >
          <MapSearch 
            selectParcelCallback={this.props.selectParcelCallback}
            view={this.props.view} 
            resultPinDragable={true}
          />
          <SidePanel ref="sidePanel" 
            //hideSidePanel={false} 
            hideSidePanel={this.props.hideSidePanel} 
            addSelectedProperties = {this.props.addSelectedProperties}
            deleteSelectedProperties = {this.props.deleteSelectedProperties}
            projectCallback = {this.setProjectCallback}
            phaseCallback = {this.setPhaseCallback}
          />
          {/* <Chatter></Chatter> */}
          <InfoPanel
            parcelData={this.props.parcelData}
            realEstateData={this.props.realEstateData}
            realEstateDataLength={this.props.realEstateDataLength}
          ></InfoPanel>
        </Grid>
      </div>
    )
  }
}

export default MapOverlayPanel