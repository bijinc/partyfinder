import {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import Dashboard from "./Dashboard";



export default class index extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Dashboard></Dashboard>
        {/* <Map></Map> */}
      </div>
    );
  }
}