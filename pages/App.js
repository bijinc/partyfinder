import {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import Dashboard from "./Dashboard";
import Map from './map';

import Auth from './Auth.js';

export default class App extends React.Component{
  // const auth = new Auth()
  // auth.login();

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 40.425,
      longitude: -86.915,
      zoom: 12
    }
  };

  const auth = new Auth();
  auth.login();
  render() {
    // const auth = new Auth();
    // auth.login();
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken='pk.eyJ1IjoiYnJpYW5sb25nOTEyIiwiYSI6ImNqdXB6dDk4MzBzMWszeXA3ODlodzBtdXcifQ.ZqmXaAGe-PFb9GZmmnhcog'
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}
