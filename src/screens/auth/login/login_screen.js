import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Input, Icon } from 'native-base';
import UUIDGenerator from 'react-native-uuid-generator';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'

import { signin } from 'actions/users';
import styles from './login_style';

const LoginScreen = (props) => {

    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const onCheck = () => {
        setChecked(!checked)
    }

    const onLogin = () => {
        if(email.length == 0 && password.length == 0){
            setEmailError(true)
            setPasswordError(true)
        }else if(email.toLowerCase() !== 'wachid@karirpad.com'){
            setEmailError(true)
        }else if(password !== 'karirpad123'){
            setEmailError(false)
            setPasswordError(true)
        }else{
            setEmailError(false)
            setPasswordError(false)
            UUIDGenerator.getRandomUUID(async (uuid) => {
                const generateId = '_' + Math.random().toString(36).substr(2, 9);
                const data = {
                    id: generateId,
                    username: 'wachid',
                    email: email,
                    password: password,
                    token: uuid
                }
                await AsyncStorage.setItem('userToken', uuid);
                props.dispatch(signin(data, uuid))
            });
        }
    }

    return(
        <Container style={styles.container}>
            <Content showsVerticalScrollIndicator={false} contentContainerStyle={styles.content} enableOnAndroid>
                <Text style={styles.txtTitle}>Masuk Akun Karirpad</Text>
                <View regular style={[styles.inputItem, {borderColor: emailError ? '#fd8c8c' : '#68bfff'}]}>
                    <View style={styles.labelWrapper}>
                        <Text style={[styles.txtLabel, {color: emailError ? '#fd8c8c' : '#68bfff'}]}>E-mail</Text>
                    </View>
                    <Input 
                        style={styles.inputText}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        autoCompleteType='off'
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View regular style={[styles.inputItem, {borderColor: passwordError ? '#fd8c8c' : '#68bfff'}]}>
                    <View style={styles.labelWrapper}>
                        <Text style={[styles.txtLabel, {color: passwordError ? '#fd8c8c' : '#68bfff'}]}>Password</Text>
                    </View>
                    <Input 
                        style={styles.inputText}
                        secureTextEntry={true}
                        autoCapitalize={'none'}
                        autoCompleteType='off'
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <View style={styles.rowBetween}>
                    <View style={styles.row}>
                        {
                            checked ?
                                <TouchableOpacity activeOpacity={0.4} style={styles.checkActive} onPress={onCheck}>
                                    <Icon type="FontAwesome" name="check" style={styles.iconCheck} />
                                </TouchableOpacity>
                            :
                                <TouchableOpacity activeOpacity={0.4} style={styles.checkInactive} onPress={onCheck}>

                                </TouchableOpacity>
                        }
                        <TouchableOpacity activeOpacity={0.7} style={styles.btnRemember} onPress={onCheck}>
                            <Text style={styles.txtRemember}>Ingat Saya</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Text style={styles.txtForgotPassword}>Lupa Kata Sandi</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.btnLogin} onPress={onLogin}>
                    <Text style={styles.txtLogin}>Login</Text>
                </TouchableOpacity>
                <View style={styles.instantWrapper}>
                    <Text ellipsizeMode="clip" numberOfLines={1} style={styles.dashed}>
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
                    </Text>
                    <View style={styles.bgWhite}>
                        <Text style={styles.txtInstant}>Instant Login</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.btnGoogle}>
                    <Icon type="AntDesign" name="google" style={styles.iconSocial} />
                    <Text style={styles.txtGoogle}>Continue With Google</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.btnFacebook}>
                    <Icon type="FontAwesome" name="facebook-official" style={styles.iconSocial} />
                    <Text style={styles.txtFacebook}>Continue With Facebook</Text>
                </TouchableOpacity>
                <View style={styles.bottomView}>
                    <Text style={styles.txtBottom}>Belum Punya Akun? </Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Register')}>
                        <Text style={[styles.txtBottom, {fontFamily: 'Roboto-Medium'}]}>Daftar</Text>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
      users: state.users,
    }
}

export default connect (mapStateToProps) (LoginScreen)