import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MeetingsScreen from './src/screens/MeetingsScreen';
import MakeMeetingScreen from './src/screens/MakeMeetingScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import ChatScreen from './src/screens/ChatScreen';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import store from './src/store/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './src/setAuthToken'
import { setCurrentUser } from './src/actions/logout';
import { Provider } from 'react-redux';
import axios from 'axios';


if(AsyncStorage.jwt) {
  setAuthToken(AsyncStorage.jwt);
  const decoded = jwt_decode(AsyncStorage.jwt);
  store.dispatch(setCurrentUser(decoded));
}

export default class App extends Component {
  componentWillMount() {
    axios.defaults.baseURL = 'http://172.20.10.4:5000'; //'http://192.168.56.1:5000';
    axios.defaults.timeout = 5000;
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}

const Navigation = () => (    
  <Router>
    <Stack hideNavBar key="root">
      <Stack 
        key="auth"
        type="reset"
      >
        <Scene 
          key="logscr" 
          component={LoginScreen}
          initial
        />
        <Scene
          key="regscr"
          component={RegistrationScreen}
        />      
      </Stack> 
    <Stack 
      key="main"
      type="reset"
    >
        <Scene 
          key="meetscr" 
          component={MeetingsScreen}
          initial
        />
        <Scene 
          key="mkmeetscr" 
          component={MakeMeetingScreen}
        />
        <Scene 
          key="prfscr" 
          component={ProfileScreen}
        />
        <Scene 
          key="chtscr"
          component={ChatScreen}
        />
      </Stack>
      
    </Stack>
  </Router>
);
