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
        marginBottom: 15,
        textAlign: 'center'
    },
    inputItem:{
        height: 50,
        backgroundColor: '#fafafb',
        marginTop: 18,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15
    },
    inputText:{
        fontSize: 17,
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 5,
    },
    iconEye:{
        fontSize: 20,
        color: '#9696a1'
    },
    indicator:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5
    },
    lineWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15
    },
    indicatorLine:{
        width: '18%',
        height: 5,
        backgroundColor: '#e2e2ea'
    },
    txtStatus:{
        color: '#9696a1',
        fontSize: 15
    },
    txtInfo:{
        textAlign: 'center',
        marginTop: 15,
        color: '#9696a1',
        lineHeight: 25,
        fontSize: 15
    },
    txtInfoBlue:{
        color: '#0062ff'
    },
    btnRegister:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#0062ff',
        marginTop: 20
    },
    txtRegister:{
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        color: '#ffffff'
    },
    centerRow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 20
    },
    iconGoogle:{
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    txtGoogle:{
        marginLeft: 15,
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        color: '#86868f'
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