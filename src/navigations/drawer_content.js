import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { Icon } from 'native-base';
import { Drawer } from "react-native-paper";
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { signout } from 'actions/users';

const DrawerContent = (props) => {
    
    const onSignOut = async () => {
        await AsyncStorage.clear().then(() => {
            props.dispatch(signout())
        })
    }

    return(
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            <View style={styles.menuCard}>
                <Text style={styles.txtMenu}>Menu</Text>
            </View>
            <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                        type="Ionicons"
                        name="home-outline"
                        style={{color, fontSize: size}}
                        />
                    )}
                    label={({color}) => (
                        <Text style={{color}}>
                            Home
                        </Text>
                    )}
                    onPress={() => props.navigation.navigate('History')}
                    activeBackgroundColor="#FFF5F5"
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        type="FontAwesome5"
                        name="user-circle"
                        style={{color, fontSize: size}}
                        />
                    )}
                    label={({color}) => (
                        <Text style={{color}}>
                            Profile
                        </Text>
                    )}
                    onPress={() => props.navigation.navigate('Profile')}
                    activeBackgroundColor="#FFF5F5"
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                        type="MaterialCommunityIcons"
                        name="exit-to-app"
                        style={{color, fontSize: size}}
                        />
                    )}
                    label={({color}) => (
                        <Text style={{color}}>
                            Sign Out
                        </Text>
                    )}
                    onPress={onSignOut}
                    activeBackgroundColor="#FFF5F5"
                />
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 0,
        paddingTop: 0
    },
    drawerContent: {
        flex: 1,
    },
    menuCard: {
        backgroundColor: '#f1f1f5',
        padding: 20,
        marginTop: 20
    },
    txtMenu:{
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        color: '#92929d'
    },
    drawerSection: {
        marginTop: 15,
    },
})

const mapStateToProps = (state) => {
    return{
      users: state.users,
    }
}

export default connect (mapStateToProps) (DrawerContent)