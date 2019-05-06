import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import BackIcon from '@material-ui/icons/KeyboardArrowLeft'
import ForwardIcon from '@material-ui/icons/KeyboardArrowRight'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'

import './InfoPanel.css'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    pointerEvents: 'auto',
  },
  list: {
      width: '100%',
      height : '100%',
      position: 'relative',
      margin: 0,
  },
  listSection: {
      height : '100%',
      backgroundColor: 'inherit',
      listStyleType: 'none',
      width: '100%',
  },
  ul: {
      backgroundColor: 'inherit',
      padding: 0,
      margin:0,
  },
  subHeader: {
      fontSize:'2rem',
      backgroundColor:'#E8E8E8'
  },
  pointerEventsAuto: {
      pointerEvents: 'auto'
  },
});

class InfoPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
        pageIndex: 0
        , pageCount:null
        , parcelData:null
        , hasError: false
    }
  }
  // componentDidUpdate() {
  //     console.log('MapSearchDidMount')
  // }
  componentDidUpdate() {
    const self = this
    const popupData = {}
    popupData.parcelData = {'label': 'Parcel Data:', 'data':self.props.parcelData}
    popupData.realEstate = {'label': 'Real Estate Data:', 'data':self.props.realEstateData}
  }
  componentWillReceiveProps(){
    if(this.state.parcelData!==this.props.parcelData){
      this.setState({parcelData:this.props.parcelData})
      this.setState({pageIndex:0})
    } 
    
  }
  nextRecord = () => {
    this.setState({pageIndex: this.state.pageIndex+1}) 
  }
  lastRecord = () => {
    this.setState({pageIndex: this.state.pageIndex-1}) 
  }
  render() {
    const { classes } = this.props;
    const self = this
    const popupData = {}
    popupData.parcelData = {'label': 'Parcel Data:', 'data':self.props.parcelData}
    popupData.realEstateData = {'label': 'Real Estate Data:', 'data':self.props.realEstateData}
    
    //if (this.props.realEstateData&&this.props.realEstateData.length !==this.state.pageCount){console.log('self.props.realEstateData.length: ' + this.props.realEstateData.length);this.setState({pageCount:this.props.realEstateData.length})}
    
    return (
      <Fade in={this.props.realEstateData!=null&&this.props.parcelData!=null} timeout={1}>
        <div className={classNames('infoPanel', {[classes.pointerEventsAuto]:this.props.realEstateData!=null&&this.props.parcelData!=null})}
                        >
            <div className='header'>
              <Grid
                container
                spacing={16}
                alignItems="center"
                direction="row"
                justify="center"
              >
                <Grid item xs>
                  <IconButton 
                    disabled={this.state.pageIndex === 0}
                    className={classes.button} 
                    onClick={this.lastRecord}
                  >  
                    <BackIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={6}>
                { popupData.parcelData.data
                  ? <h2>PIN: {popupData.parcelData.data.PIN}</h2>
                  : null
                }
                </Grid>
                <Grid item xs>
                  <IconButton 
                    disabled = {this.state.pageIndex===this.props.realEstateDataLength}
                    className={classes.button} 
                    onClick={this.nextRecord}
                  >
                    <ForwardIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </div>
            <div className='body'>
            
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="stretch"
            >
               { this.state.pageIndex === 0 && popupData.parcelData.data !== null && popupData.parcelData !== null
                ? <List className={classes.list} subheader={<li />}>
                    <li key={`section-${popupData.parcelData.label}`} className={classes.listSection}>
                        {JSON.stringify(popupData.parcelData.data) != '{}' &&
                            <ul className={classes.ul}>
                                <ListSubheader disableGutters className={classes.subHeader}>{`${popupData.parcelData.label}`}</ListSubheader>
                                {Object.keys(popupData.parcelData.data).map(item => (
                                <ListItem key={`item-${popupData.parcelData.label}-${item}`}>
                                    <ListItemText primary={`${item} : ${popupData.parcelData.data[item]}`} />
                                </ListItem>
                                ))}
                            </ul>
                        }
                    </li>
                  </List>  
                : this.state.pageIndex > 0 && popupData.realEstateData
                  ? <List className={classes.list} subheader={<li />}>
                      {popupData.realEstateData.data &&
                        <li key={`section-${popupData.realEstateData.label}`} className={classes.listSection}>
                            {popupData.realEstateData.data.length !== 0 &&
                                <ul className={classes.ul}>
                                    <ListSubheader disableGutters className={classes.subHeader}>{`${popupData.realEstateData.label} `+this.state.pageIndex}</ListSubheader>
                                    {Object.keys(popupData.realEstateData.data[this.state.pageIndex - 1]).map(item => (
                                    <ListItem key={`item-${popupData.realEstateData.label}-${item}`}>
                                        <ListItemText primary={`${item} : ${popupData.realEstateData.data[this.state.pageIndex -1][item]}`} />
                                    </ListItem>
                                    ))}
                                </ul>
                            }
                        </li>
                      }
                    </List>  
                  : null
              }
            </Grid>
          </div>    
        </div>
      </Fade>
    )
  }
}
InfoPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(InfoPanel);