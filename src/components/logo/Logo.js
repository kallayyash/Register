import React, { Component } from 'react';
import logo from './../../assets/images/signup/Loginlogo.png'
import {
    StyleSheet,
    Text,
    View,
     Image 
  } from 'react-native';
class Logo extends Component {
    
    render() {
        return (
            <View style = {styles.container}>
                  <Image source = {logo} />
                  
            </View>
        )
    }
}

export default Logo

const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center'
    },

  });