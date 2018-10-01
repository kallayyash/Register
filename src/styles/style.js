import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
    },
   
    textColor: {
    color: 'rgb(15,113,184)',
    fontSize: 8
    },

    textDesign: {
        width: 310,
        // borderColor: 'gray',
        // margin: 1,
        // borderWidth: 1,
        padding: 8,
        // borderRadius: 30,
        color: 'rgb(51,51,51)',
        paddingHorizontal: 0,  //textinput inside leave space 
        fontSize: 8.93,
    },

    textStart : {
        color: '#0f71b8',
        padding : 5,

    },
    mobilenumberField : {
        width: 310,
       padding: 8,
      color: 'rgb(51,51,51)',
        paddingHorizontal: 0,  //textinput inside leave space 
        fontSize: 8.93,
        paddingHorizontal: 6.26 
    },
    telephoneNo: {
        flexDirection: 'row',
        padding: 8,
        color: 'rgb(51,51,51)',
        paddingHorizontal: 0,  //textinput inside leave space 
        fontSize: 8.93,


    },
    telephoneNo1: {
        borderBottomColor: 'rgb(151,151,151)',
        borderRightWidth: 1,
        marginTop: 10,
        height: 9.7
    },
    button: {
        width: 310,
        height: 24.93,
        backgroundColor: 'rgb(15,113,184)',
        borderRadius: 6.2,
        marginVertical: 10, //for spacing b/n pass and button 
        // paddingVertical: 13  //button size
    },
    buttonText: {
        fontSize: 16,
        width: 310,
        height: 24.93,
        // fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 10,
        color: 'black',


    },
    signUp: {

        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',


    },
    signUpText: {
        fontSize: 10,
        color: '#96c41c',

    },
    textBoxBtnHolder:
    {
        position: 'relative',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

    textBox:
    {
        fontSize: 18,
        alignSelf: 'stretch',
        height: 45,
        paddingRight: 45,
        paddingLeft: 8,
        borderWidth: 1,
        paddingVertical: 0,

    },

    visibilityBtn:
    {
        position: 'absolute',
        right: 3,
        height: 40,
        width: 35,
        padding: 5
    },

    btnImage:
    {
        resizeMode: 'contain',
        height: '70%',
        width: '70%'
    },

    topSpace : {
        marginTop : 16,
    },
    flexRow: {
        flexDirection: 'row'
    },
    termsTopspace: {
        flexDirection: 'row',
        marginTop: 8
    },
    textAgree : {
        fontSize: 8,
    },
    textHighlight :{
        color: '#0f71b8',
         fontSize: 8
    }
})
export default styles;
