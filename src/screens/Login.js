import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from "./../styles";

class Login extends Component<{}> {

    render() {

        return (
            <View style={styles.appContainer}>
                <Text onPress = {() => { Actions.register()}}>I am login page</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
