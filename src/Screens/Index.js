import React, { Component } from 'react';
import { createAppContainer, CreateStackNavigator } from 'react-navigation';

import App from './App';

const MainNav = createStackNavigator (
{
    App: {
        screen: App,
        navigationOptions:{
            header: null
        }
    }
}    
)

export default createAppContainer(MainNav);