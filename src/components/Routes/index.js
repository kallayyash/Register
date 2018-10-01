import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './../../screens/Login';
import Register from './../../screens/Register';
import { StyleSheet } from 'react-native';

export default class Routes extends Component {

	render() {
		return (
			<Router>
				<Scene >

					<Scene key="login" component={Login} title="Login" hideNavBar={true} />
					<Scene key="register" component={Register} title="Registration" 
						titleStyle={styles.navigationBarTitleStyle} initial={true}
						backButtonImage={require('./../../assets/images/signup/Backchevron.png')}
					/>



				</Scene>
			</Router>
		);
	}
}

const styles = StyleSheet.create({
	navigationBarTitleStyle: {
		textAlign: 'center',
		marginLeft: 80
	}
});
