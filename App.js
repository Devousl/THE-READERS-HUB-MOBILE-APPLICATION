import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


import AssetExample from './components/AssetExample';


import { Card } from 'react-native-paper';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Category from "./screens/Category";
import Search from "./screens/Search";
import Fiction from "./screens/Fiction";
import NonFiction from "./screens/NonFiction";
import Comic from "./screens/Comic";




const stack = createStackNavigator();

function App() {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home} options={{
          title: 'WELCOME TO READERS HUB',
          headerStyle: {
            backgroundColor: 'darkblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}/>
      <stack.Screen name="Login" component={Login} options={{
          title: 'RESET YOUR PASSWORD',
          headerStyle: {
            backgroundColor: 'darkblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
       }} />
      <stack.Screen name="Register" component={Register} options={{
          title: 'NEW USER REGISTER',
          headerStyle: {
            backgroundColor: 'darkblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },}} />
    
      
      <stack.Screen name="Dashboard" component={Dashboard} options={{
          title: 'EXPLORE YOUR OWNS',
          headerStyle: {
            backgroundColor: 'darkblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}/>
     
      <stack.Screen name="Category" component={Category} options={{
          title: 'FIND THE CATEGORIES',
          headerStyle: {
            backgroundColor: 'darkblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}/>
    
      <stack.Screen name="Search" component={Search} options={{
          title: 'SEARCH THE BOOKS',
          headerStyle: {
            backgroundColor: 'darkblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}/>
        <stack.Screen name="Fiction" component={Login} options={{
          title: 'FICTION BOOKS',
          headerStyle: {
            backgroundColor: 'darkblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
       }} />
 <stack.Screen name="NonFiction" component={Login} options={{
          title: 'NON-FICTION BOOKS',
          headerStyle: {
            backgroundColor: 'darkblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
       }} />
 <stack.Screen name="Comic" component={Login} options={{
          title: 'COMIC BOOKS',
          headerStyle: {
            backgroundColor: 'darkblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
       }} />

      
      
      
    </stack.Navigator>


  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
