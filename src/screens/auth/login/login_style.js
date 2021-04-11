import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    content:{
        paddingHorizontal: 15,
        paddingTop: 50,
    },
    txtTitle:{
        fontFamily: 'Roboto-Medium',
        fontSize: 24,
    },
    inputItem:{
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 55,
        borderWidth: 1.6,
        borderColor: '#68bfff',
        marginTop: 35
    },
    labelWrapper:{
        position: 'absolute',
        paddingHorizontal: 8,
        backgroundColor: '#ffffff',
        left: 15,
        top: -9
    },
    txtLabel: {
        fontSize: 14,
        color: '#68bfff'
    },
    inputText:{
        fontSize: 17,
        paddingRight: 15,
        paddingLeft: 0,
        marginTop: 5
    },
    rowBetween:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkActive:{
        borderWidth: 1,
        borderColor: '#68bfff',
        width: 17,
        height: 17,
        borderRadius: 3,
        backgroundColor: "#68bfff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconCheck:{
        fontSize: 10,
        color: '#ffffff'
    },
    checkInactive:{
        borderWidth: 1,
        borderColor: '#828282',
        width: 17,
        height: 17,
        borderRadius: 3,
    },
    btnRemember:{
        marginLeft: 10
    },
    txtRemember:{
        opacity: 0.8,
        fontSize: 14,
    },
    txtForgotPassword:{
        fontSize: 14,
        color: '#68bfff'
    },
    btnLogin:{
        height: 55,
        backgroundColor: '#0062ff',
        marginTop: 30,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtLogin:{
        fontFamily: 'Roboto-Bold',
        fontSize: 15,
        color: '#ffffff'
    },
    instantWrapper:{
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15
    },
    dashed:{
        position: 'absolute',
        fontSize: 30,
        color: '#ebebf0',
        letterSpacing: -3
    },
    bgWhite:{
        backgroundColor: '#ffffff',
        paddingHorizontal: 25,
        marginTop: 10
    },
    txtInstant:{
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        color: '#c6c6cc',
    },
    btnGoogle:{
        marginTop: 20,
        height: 50,
        backgroundColor: '#fc5a5a',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    iconSocial:{
        fontSize: 24,
        color: '#ffffff'
    },
    txtGoogle:{
        fontFamily: 'Roboto-Bold',
        fontSize: 15,
        color: '#ffffff',
        marginLeft: 15
    },
    btnFacebook:{
        marginTop: 12,
        height: 50,
        backgroundColor: '#0062ff',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txtFacebook:{
        fontFamily: 'Roboto-Bold',
        fontSize: 15,
        color: '#ffffff',
        marginLeft: 15
    },
    bottomView:{
        marginTop: 20,
        backgroundColor: '#fafafb',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txtBottom:{
        fontSize: 14,
        color: '#2579fe'
    }
})