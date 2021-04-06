import * as React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DonateScreen from '../screens/DonateScreen';
import RequestScreen from '../screens/RequestScreen';
import SignupLoginScreen from '../screens/SignupLoginScreen';


export const AppTabNavigator = createBottomTabNavigator({
    RequestScreen: {
        screen: RequestScreen,
        navigationOptions: {
            tabBarLabel: 'Request items.'
        }
    },
    DonateScreen : {
        screen: DonateScreen,
        navigationOptions:{
            tabBarLabel: 'Donate items.'
        }
        
    }
});

