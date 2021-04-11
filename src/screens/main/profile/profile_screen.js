import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Icon } from 'native-base';

import img from 'images';
import styles from './profile_style';

const ProfileScreen = (props) => {
    return(
        <Container style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.5} style={styles.btnMenu} onPress={() => props.navigation.openDrawer()}>
                    <Icon type="AntDesign" name="minus" style={styles.iconMinus} />
                    <Icon type="AntDesign" name="minus" style={styles.iconMinus2} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.btnEdit}>
                    <Icon type="AntDesign" name="edit" style={styles.iconEdit} />
                </TouchableOpacity>
            </View>
            <Content showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
                <View style={styles.mainCard}>
                    <Image source={img.imgProfile} style={styles.imgProfile} />
                    <Text style={styles.profileName}>Wachid Rahmad</Text>
                    <Text style={styles.profilePosition}>Web Developer</Text>
                </View>
                <Text style={styles.subTitle}>Email</Text>
                <Text style={styles.profileInfo}>wachid@karirpad.com</Text>
                <Text style={styles.subTitle}>Mobile</Text>
                <Text style={styles.profileInfo}>wachid@karirpad.com</Text>
                <Text style={styles.subTitle}>Job Function</Text>
                <Text style={styles.profileInfo}>Web Developer</Text>
                <Text style={styles.subTitle}>Expected Salary</Text>
                <Text style={styles.profileInfo}>Rp. 5.000.000</Text>
                <Text style={styles.subTitle}>Bio</Text>
                <Text style={[styles.profileInfo, {marginTop: 5}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industri. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s    </Text>
                <Text style={styles.subTitle}>Skill</Text>
                <View style={styles.row}>
                    <View style={styles.statusBlue}>
                        <Text style={styles.txtStatus}>Photography</Text>
                    </View>
                    <View style={styles.statusGreen}>
                        <Text style={styles.txtStatus}>Design</Text>
                    </View>
                    <View style={styles.statusPurple}>
                        <Text style={styles.txtStatus}>Marketing</Text>
                    </View>
                </View>
            </Content>
        </Container>
    )
}

export default ProfileScreen;