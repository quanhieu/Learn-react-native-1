import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from "./AppNavigator";

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
    render() {
        return (
          <AppContainer/>
        )
    }
}

export default App;
