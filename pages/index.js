import {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import Dashboard from "./Dashboard";

import Auth from './Auth';

export default class index extends React.Component{

  constructor(props) {
    super(props);
  }


  render() {
    const auth = new Auth();
    auth.login();
    return (
      <div>
        <Dashboard></Dashboard>
        {/* <Map></Map> */}
      </div>
    );
  }
}
