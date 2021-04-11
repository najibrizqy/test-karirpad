import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 35,
        paddingBottom: 15
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
    iconHistory:{
        fontSize: 19,
        color: '#0062ff'
    },
    headerTitle:{
        marginLeft: 10,
        fontFamily: 'Roboto-Medium',
        fontSize: 21
    },
    btnNotif:{
        marginLeft: 'auto'
    },
    iconNotif:{
        fontSize: 28,
        color: '#9797a1'
    },
    bulletRed:{
        width: 9,
        height: 9,
        borderRadius: 9,
        backgroundColor: '#fc5a5a',
        position: 'absolute',
        right: -1,
        top: -1
    },
    btnProfile:{
        paddingLeft: 15
    },
    imgProfile:{
        width: 35,
        height: 35,
        borderRadius: 35,
        resizeMode: 'cover'
    },
    content:{
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    filterCard:{
        paddingTop: 15,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#f1f1f5'
    },
    inputItem:{
        height: 55,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#f1f1f5',
        marginHorizontal: 15,
        marginBottom: 15
    },
    inputText:{
        fontSize: 16,
        paddingLeft: 10
    },
    iconInput:{
        fontSize: 20,
        color: '#74c3ff'
    },
    btnSearch:{
        marginHorizontal: 15,
        marginBottom: 15,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#0062ff'
    },
    txtSearch:{
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        color: '#ffffff'
    },
    btnSeeMore:{
        bottom: 0,
        width: "100%",
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f5',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    txtSeeMore:{
        fontSize: 16,
        color: '#9d9da7'
    },
    iconDown:{
        fontSize: 24,
        color: '#9d9da7'
    },
    vacancyCount:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 30,
        marginHorizontal: 15
    },
    txtCount:{
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        opacity: 0.8
    },
    iconDot:{
        fontSize: 24,
        color: '#92929d'
    },
    vacancyCard:{
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#f1f1f5',
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 15
    },
    btnDot:{
        position: 'absolute',
        right: 0,
        top: 15,
        paddingRight: 15
    },
    iconKarirpad:{
        width: 65,
        height: 65,
        resizeMode: 'contain'
    },
    vacancyTitle:{
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        marginTop: 10
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    vacancyCompany:{
        color: '#0062ff',
        fontSize: 16
    },
    iconDotSingle:{
        fontSize: 20,
        color: '#d9d9d9'
    },
    companyInfo:{
        fontSize: 16,
        color: '#92929d'
    },
    rowBetween:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    },
    vacancyLocation:{
        fontSize: 16
    },
    iconAttach:{
        fontSize: 14,
        color: '#92929d'
    },
    attachCount:{
        fontSize: 16,
        color: '#92929d'
    },
    vacancyTime:{
        color: '#92929d'
    },
    vacancyType:{
        backgroundColor: '#f1f1f5',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 6
    },
    txtType:{
        fontFamily: 'Roboto-Medium',
        fontSize: 12,
        opacity: 0.7
    }
})