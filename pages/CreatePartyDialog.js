import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {addEvent} from './ServerFunctions'


export default class CreateParty extends React.Component {
  state = {
    open: false,
    name: '',
    theme: '',
    start: '',
    end: '',
    over21: false,
    BYOB: false,
    cover: 0,
    addresss: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    const event= {
      name: this.state.name,
      hostName: this.props.user,
      theme: this.state.theme,
      startTime: this.state.start,
      endTime: this.state.end,
      ageLimit: this.state.over21,
      BYOB: this.state.BYOB,
      cover: this.state.cover,
      address: this.state.address,
    }
    addEvent(event);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSwitch = name => event => {
    this.setState({ [name]: event.target.checked})
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <Button color="primary" onClick={this.handleClickOpen}>
          New Event
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create an Event</DialogTitle>
          <DialogContent style={{flexDirection: 'column'}}>
            <DialogContentText>
              
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name of Event"
              onChange={this.handleChange('name')}
            />
            <TextField
              margin="dense"
              id="theme"
              label="Theme"
              onChange={this.handleChange('theme')}
            />
            <TextField
              margin="dense"
              id="address"
              label="Address"
              fullWidth
              onChange={this.handleChange('address')}
            />
            <TextField
              id="start"
              label="Start Time"
              type='time'
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleChange('start')}
            />
            <TextField
              id="end"
              label="End Time"
              type='time'
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleChange('end')}
            />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.over21}
                    onChange={this.handleSwitch('over21')}
                    value="over21"
                  />
                }
                label="21+"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.BYOB}
                    onChange={this.handleSwitch('BYOB')}
                    value="BYOB"
                  />
                }
                label="BYOB"
              />
            </FormGroup>
            <TextField
              id="cover"
              label="Cover Charge"
              type='number'
              onChange={this.handleChange('cover')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add Event
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}