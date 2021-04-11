import React, {useEffect, useState} from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import DrawerContent from './drawer_content';
import LoginScreen from './../screens/auth/login/login_screen';
import RegisterScreen from './../screens/auth/register/register_screen';
import HomeScreen from './../screens/main/home/home_screen';
import ProfileScreen from './../screens/main/profile/profile_screen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = (props) => {

  const mainStack = () => {
    return (
      <Stack.Navigator initialRouteName="History" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="History" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
     {
        props.users.userToken ?
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={{swipeEnabled: false}}>
            <Drawer.Screen name="Home" component={mainStack} />
          </Drawer.Navigator> 
        : 
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
      }  
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return{
    users: state.users,
  }
}

export default connect (mapStateToProps) (Navigation);