import {Component} from 'react';
import LocationOn from '@material-ui/icons/LocationOn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ReactMapGL, {Marker, Layer} from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import {getEvents} from './ServerFunctions';




export default class Map extends React.Component{
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      viewport: {
        width: 0,
        height: 0,
        latitude: 40.427,
        longitude: -86.915,
        zoom: 14
      },
      events: [
      //   {name: 'Party',
      //   theme: 'Boogie',
      //   start: '12:30',
      //   end: '3:30',
      //   over21: false,
      //   BYOB: false,
      //   position: [40.4285,-86.909],
      // },
      // {name: "Jose's Party",
      //   theme: 'Fun',
      //   start: '4:00',
      //   end: '6:00',
      //   over21: true,
      //   BYOB: true,
      //   position: [40.426,-86.924],
      // },
      // {name: '',
      //   theme: '',
      //   start: '',
      //   end: '',
      //   over21: false,
      //   BYOB: false,
      //   lat: 40.435,
      //   long: -86.914,
      //   position: [40.435,-86.914],
      // },
      ],
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    //fetch events
    // fetch('http://party-finder.me/app/events', {
    //   method: 'GET',
    // }).then(response => this.setState({events: response.data})).catch();

    getEvents().then(response => {
      for(let i=0;i<response.length; i++){
        let event = response[i];
        this.state.events.push(event);
      }
    });
    console.log(this.state.events)
    // this.setState({events: events})
    // console.log(this.state.events) 
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
        scrollZoom={false}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
      <List>
        {this.state.events.map((event, index) => (
          <ListItem key={index}>
            <Marker
              latitude={event.coordinates[0]}
              longitude={event.coordinates[1]}
              offsetTop={-10}
              onClick={() => this.clickMarker()}
              position='relative'
            >
              <LocationOn/>
            </Marker>
          </ListItem>
        ))}
      </List>
      </ReactMapGL>
    );
  }
}