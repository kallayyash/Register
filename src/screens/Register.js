import { connect } from 'react-redux';
import React, { Component } from 'react';
import { 
  Text,
  TextInput,
  View, 
  Image, 
  TouchableOpacity, 
  CheckBox, 
  ScrollView ,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/style';

class Register extends Component {
  constructor() {
    super();
    this.state = { hidePassword: true, hidePassword1: true } 
  }

    managePasswordVisibility = () => {
      this.setState({ hidePassword: !this.state.hidePassword });
    }

    managePasswordVisibility1 = () => {
      this.setState({ hidePassword1: !this.state.hidePassword1 });
    }

    render() {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View>

              <View>

              <Text>
                <Text style={styles.textColor}>First name</Text>
                <Text style={styles.textStart}> * </Text>
              </Text>

                <TextInput 
                  placeholder="Enter first name" 
                  style={styles.textDesign} 
                  maxLength={30}
                  keyboardType=""
                  placeholderTextColor="gray"
                  underlineColorAndroid="rgb(204,204,204)"
               />
              </View>



              <View style={styles.topSpace}>
                <Text>
                  <Text style={styles.textColor}>Last name </Text>
                  <Text style={styles.textStart}> * </Text>
                </Text>

                <TextInput 
                  placeholder="Enter last name" 
                  style={styles.textDesign}
                  maxLength={30}
                  placeholderTextColor='gray' 
                  underlineColorAndroid="rgb(204,204,204)" 
                />
              </View>

              <View style={styles.topSpace}>
                <Text>
                  <Text style={styles.textColor}>Date of birth</Text>
                  <Text style={styles.textStart}> * </Text>
                </Text>

                <TextInput 
                  placeholder="Date of birth" 
                  style={styles.textDesign}
                  placeholderTextColor="gray"
                  underlineColorAndroid="rgb(204,204,204)" />
              </View>

              <View style={styles.topSpace}>
                <Text>
                  <Text style={styles.textColor}>Mobile number</Text>
                  <Text style={styles.textStart}> * </Text>
                </Text>

                <View style={styles.flexRow}>
                  <TextInput 
                    placeholder="+31 " 
                    maxLength={3} 
                    style={styles.telephoneNo}
                    placeholderTextColor="gray" 
                    underlineColorAndroid="rgb(204,204,204)" 
                  />

                  <Text style={styles.telephoneNo1}></Text>
 
                  <TextInput 
                    placeholder=" Enter mobile number" 
                    style={styles.mobilenumberField} 
                    maxLength={10}
                    placeholderTextColor='gray' 
                    underlineColorAndroid="rgb(204,204,204)" 
                  />
                </View>

              </View>


              <View style={styles.topSpace}>
                <Text>
                  <Text style={styles.textColor}>Email</Text>
                  <Text style={styles.textStart}> * </Text>
                </Text>
                <TextInput 
                  placeholder="Enter email address" 
                  style={styles.textDesign}
                  keyboardType="email-address"
                  placeholderTextColor="gray" 
                  underlineColorAndroid="rgb(204,204,204)" 
                />
              </View>



              <View style={styles.topSpace}>
                <Text>
                  <Text style={styles.textColor}>Password</Text>
                  <Text style={styles.textStart}> * </Text>
                </Text>

                <View style={styles.textBoxBtnHolder}>
                  <TextInput 
                    underlineColorAndroid="rgb(204,204,204)" 
                    secureTextEntry={this.state.hidePassword} 
                    style={styles.textDesign} 
                    />
                  <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.visibilityBtn} 
                    onPress={this.managePasswordVisibility}>
                    <Image source={(this.state.hidePassword) ? require('./../assets/images/signup/hidepassword.png') : require('./../assets/images/signup/Showpassword.png')} 
                      style={styles.btnImage} 
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.topSpace}>
                <Text>
                  <Text style={styles.textColor}>Confirm password</Text>
                  <Text style={styles.textStart}> * </Text>
                </Text>
                <View style={styles.textBoxBtnHolder}>
                  <TextInput 
                    underlineColorAndroid="rgb(204,204,204)" 
                    secureTextEntry={this.state.hidePassword1} 
                    style={styles.textDesign} />
                  <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.visibilityBtn} 
                    onPress={this.managePasswordVisibility1}>
                    <Image source={(this.state.hidePassword1) ? require('./../assets/images/signup/hidepassword.png') : require('./../assets/images/signup/Showpassword.png')} 
                      style={styles.btnImage} 
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.checkbox}>
                <View style={styles.flexRow}>
                  <CheckBox />
                  <View style={styles.termsTopspace}>
                    <Text style={{ fontSize: 8 }}>  Subscribe the</Text>
                    <Text style={styles.textHighlight}> Newsletter</Text>
                  </View>
                </View>

                <View style={styles.flexRow}>
                  <CheckBox checked={true} />
                  <View style={styles.termsTopspace}>
                    <Text style={styles.textAgree}> I agree </Text>
                    <Text style={styles.textHighlight}>Terms and services </Text>
                    <Text style={styles.textAgree}>> and  </Text>
                    <Text style={styles.textHighlight} >Privacy policy</Text>
                  </View>
                </View>
              </View>

            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} 
                  onPress={() => { alert("Register Successfully");
                    Actions.login() }}>Register</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
        </View>
      );
    }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Register);