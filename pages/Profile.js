import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {updateProfile} from './ServerFunctions';

export default class Profile extends React.Component {
  state = {
    open: false,
    id: '5cbe922150c663502678c2f2',
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    hosting: false,
    eventName: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    const user= {
      id: this.state.id,
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      birthday: this.state.birthday,
      hosting: this.state.hosting,
      eventName: this.state.eventName,
    }
    updateProfile(user);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.handleClickOpen}>
          Profile
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Profile</DialogTitle>
          <DialogContent>
            <TextField
              disabled
              autoFocus
              id="userName"
              label="Username"
              placeholder={this.state.userName}
              onChange={this.handleChange('userName')}
            />
            <TextField
              id="firstName"
              label="First Name"
              onChange={this.handleChange('firstName')}
            />
            <TextField
              id="lastName"
              label="Last Name"
              onChange={this.handleChange('lastName')}
            />
            <TextField
              id="email"
              label="Email"
              fullWidth
              onChange={this.handleChange('email')}
              type='email'
            />
            <TextField
              id="password"
              label="Password"
              type='password'
              onChange={this.handleChange('password')}
            />
            <TextField
              id="brithday"
              label="Birthday"
              onChange={this.handleChange('birthday')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}