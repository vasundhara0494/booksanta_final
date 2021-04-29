import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator'
import {Icon} from "react-native-elements"
import CustomSideBar from './CustomSideBar'
import SettingScreen from '../screens/SettingScreen';
import MyDonations from '../screens/MyDonationsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyReceivedBooksScreen from '../screens/MyReceivedBooksScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen: AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
        },
  MyDonations : {
    screen : MyDonations,
    navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "My Donations"
    }
  },
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon : <Icon name="bell" type ="font-awesome" />,
      drawerLabel : "Notifications"
    }
  },
  Settings :{
    screen: SettingScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
  },
  MyReceivedBooks :{
    screen: MyReceivedBooksScreen,
    navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "My Received Books"
    }
  },
  
},
  {
  contentComponent: CustomSideBar,
  },
  {
      initialRouteName : 'Home'
});