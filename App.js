import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from "./AppNavigator";
import axios from "axios";

axios.defaults.baseURL = "http:/10.0.3.2:3000";

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
    render() {
        return (
          <AppContainer/>
        )
    }
}

export default App;
