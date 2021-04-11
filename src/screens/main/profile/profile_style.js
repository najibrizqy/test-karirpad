import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 35,
        paddingBottom: 5
    },
    btnMenu:{
        paddingRight: 10
    },
    iconMinus:{
        color: '#9a9aa4'
    },
    iconMinus2:{
        color: '#9a9aa4',
        marginTop: -20
    },
    btnEdit:{
        paddingRight: 5
    },
    iconEdit:{
        fontSize: 25,
        color: '#87878f'
    },
    content:{
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    mainCard:{
        borderBottomWidth: 1,
        borderColor: '#d2d2d2',
        alignItems: 'center',
        paddingBottom: 50
    },
    imgProfile:{
        width: 120,
        height: 120,
        borderRadius: 50,
        resizeMode: 'cover'
    },
    profileName:{
        fontFamily: 'Roboto-Medium',
        fontSize: 20,
        marginTop: 10
    },
    profilePosition:{
        opacity: 0.8
    },
    subTitle:{
        marginTop: 25,
        fontFamily: 'Roboto-Bold',
        fontSize: 15,
        color: '#808084',
        textTransform: 'uppercase'
    },
    profileInfo:{
        fontSize: 15,
        opacity: 0.8
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    statusBlue:{
        backgroundColor: '#50b5ff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#898f94'
    },
    statusGreen:{
        backgroundColor: '#82c43c',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#898f94'
    },
    statusPurple:{
        backgroundColor: '#a461d8',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#898f94'
    },
    txtStatus:{
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        textTransform: 'uppercase',
        color: '#ffffff'
    }
})