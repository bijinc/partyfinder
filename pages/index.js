import {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import Dashboard from "./Dashboard";
import Map from './map';



export default class index extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Map></Map>
    );
  }
}