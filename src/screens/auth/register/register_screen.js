import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content, Input, Icon } from 'native-base';

import img from 'images';
import styles from './register_style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RegisterScreen = (props) => {

    const [hidePassword, setHidePassword] = useState(true)
    const [icon, setIcon] = useState('eye-outline')

    const _changeIcon = () => {
        setHidePassword(!hidePassword)
        setIcon(icon === 'eye-outline' ? 'eye-off-outline' : 'eye-outline')
    }

    return(
        <Container style={styles.container}>
            <Content showsVerticalScrollIndicator={false} contentContainerStyle={styles.content} enableOnAndroid>
                <Text style={styles.txtTitle}>Daftar Akun Karirpad</Text>
                <View style={styles.inputItem}>
                    <Input 
                        style={styles.inputText}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        autoCompleteType='off'
                        placeholder="Your email"
                        placeholderTextColor="#9d9da7"
                    />
                </View>
                <View style={styles.inputItem}>
                    <Input 
                        style={styles.inputText}
                        autoCapitalize={'none'}
                        autoCompleteType='off'
                        placeholder="Your name"
                        placeholderTextColor="#9d9da7"
                    />
                </View>
                <View style={styles.inputItem}>
                    <Input 
                        style={[styles.inputText, {paddingRight: 35}]}
                        secureTextEntry={hidePassword}
                        autoCapitalize={'none'}
                        maxLength={40}
                        autoCompleteType='off'
                        placeholder="Create Password"
                        placeholderTextColor="#9d9da7"
                    />
                    <Icon type="Ionicons" name={icon} style={styles.iconEye} onPress={_changeIcon} />
                </View>
                <View style={styles.indicator}>
                    <View style={styles.lineWrapper}>
                        <View style={styles.indicatorLine} />
                        <View style={styles.indicatorLine} />
                        <View style={styles.indicatorLine} />
                        <View style={styles.indicatorLine} />
                        <View style={styles.indicatorLine} />
                    </View>
                    <Text style={styles.txtStatus}>None</Text>
                </View>
                <Text style={styles.txtInfo}>
                    By signing up, you confirm that you've read and accepted our <Text style={styles.txtInfoBlue}>User Notice</Text> and <Text style={styles.txtInfoBlue}>Privacy Police.</Text>
                </Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.btnRegister}>
                    <Text style={styles.txtRegister}>Register</Text>
                </TouchableOpacity>
                <Text style={styles.txtInfo}>OR</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.centerRow}>
                    <Image source={img.iconGoogle} style={styles.iconGoogle} />
                    <Text style={styles.txtGoogle}>Continue with Google</Text>
                </TouchableOpacity>
                <View style={styles.bottomView}>
                    <Text style={styles.txtBottom}>Sudah Punya Akun? </Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.goBack()}>
                        <Text style={[styles.txtBottom, {fontFamily: 'Roboto-Medium'}]}>Masuk</Text>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
    )
}

export default RegisterScreen;