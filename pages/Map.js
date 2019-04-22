import {Component} from 'react';
import LocationOn from '@material-ui/icons/LocationOn';
import ReactMapGL, {Marker} from 'react-map-gl';
import Dashboard from "./Dashboard";



export default class Map extends React.Component{
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      width: 0,
      height: 0,
      viewport: {
        width: 0,
        height: 0,
        latitude: 40.425,
        longitude: -86.915,
        zoom: 12
      }
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    console.log(this.state)
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState(prevState => ({ 
      viewport: {
        ...prevState.viewport,
        width: window.innerWidth, 
        height: window.innerHeight,
      }
    }));
  }

  clickMarker() {
    
  }
  
  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken='pk.eyJ1IjoiYnJpYW5sb25nOTEyIiwiYSI6ImNqdXB6dDk4MzBzMWszeXA3ODlodzBtdXcifQ.ZqmXaAGe-PFb9GZmmnhcog'
        onViewportChange={(viewport) => this.setState({viewport})}
      >
      <Marker
        latitude={40.425} 
        longitude={-86.915}
        offsetTop={-10}
        onClick={() => this.clickMarker()}
      >
        <LocationOn/>
      </Marker>
      </ReactMapGL>
    );
  }
}