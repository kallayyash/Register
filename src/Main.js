import { connect } from 'react-redux';
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import { Routes } from './components';

import styles from './styles';

class Main extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <StatusBar
          backgroundColor="#e0e0e0"
          barStyle="dark-content"
        />
        <Routes />
      </View>
    );
  }
}

// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

export default connect(null, null)(Main);
