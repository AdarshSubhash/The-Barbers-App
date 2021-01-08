import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    FlatList,Image} from 'react-native';
    import Barberlogin from "../screens/barberslogin";
    import{createBottomTabNavigator} from 'react-navigation-tabs';
  import Customerhomescreen from '../screens/customer';

    export const AppTabNavigator=createBottomTabNavigator({
        Barberlogin:{screen:Barberlogin,navigationOptions:{
            tabBarIcon:<Image source={require("../assets/Shop.jpg")}
            />,
tabBarLabel:'SaloonDetails'
           
        }},

        
        
    })