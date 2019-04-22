import {Component} from 'react';
import ReactMapGL from 'react-map-gl';

export default class Map extends React.Component {

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 40.425,
      longitude: -86.915,
      zoom: 12
    }
  };
  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken='pk.eyJ1IjoiYnJpYW5sb25nOTEyIiwiYSI6ImNqdXB6dDk4MzBzMWszeXA3ODlodzBtdXcifQ.ZqmXaAGe-PFb9GZmmnhcog'
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}



// class Map extends React.Component {
//     componentDidMount() {
//       this.map = new mapboxgl.Map({
//         container: this.mapContainer,
//         style: 'mapbox://styles/mapbox/streets-v9'
//       });
//     }
  
//     componentWillUnmount() {
//       this.map.remove();
//     }
  
//     render() {
//       const style {
//         position: 'absolute',
//         top: 0,
//         bottom: 0,
//         width: '100%'
//       };
  
//       return <div style={style} ref={el => this.mapContainer = el} />;
//     }
//   }