import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Iframe from 'react-iframe'
// import Grid from '@material-ui/core/Grid'
// import Fade from '@material-ui/core/Fade';
// import IconButton from '@material-ui/core/IconButton';
// import BackIcon from '@material-ui/icons/KeyboardArrowLeft';
// import ForwardIcon from '@material-ui/icons/KeyboardArrowRight';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';


const styles = theme => ({
  root: {
      height:'40em',
      width:'40em',
      position:'relative',  
      top: '20em',
      backgroundColor: theme.palette.background.paper,
  },
});

class Chatter extends Component {
  constructor(props){
    super(props)
    this.state = {
        pageIndex: 0
    }
  }
  // componentDidUpdate() {
  //     console.log('MapSearchDidMount')
  // }
  componentDidUpdate() {
    console.log('componentDidUpdate') 
  }
  componentWillReceiveProps(){
    console.log('componentWillRecieveProps') 
  }
  render() {
    const { classes } = this.props;
    const self = this
    return (
        <div className={classes.root}>
            <Iframe url="https://services.townofcary.org/services/oauth2/authorize?response_type=code&client_id=3MVG9ahGHqp.k2_wCB9MiYn6942wDO3E1981n4v3eG6Pxe5WwKTni6j3J9AiN0cgpU1Z4cgmk1YVN7MIYN74r&redirect_uri=https://carync--test.lightning.force.com/lightning/page/chatter"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen
            />
        </div>
    )
  }
}
Chatter.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Chatter);