import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ToastAndroid, Touchable, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/native-stack';
import useViewModel from './viewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';


export const HomeScreen = () => {

    const { email, password, onChange } = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (

        <View style={styles.container}>
            <Image
                source={require('../../../../assets/descarga.jpg')}
                style={styles.imageBackground}
            />

            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/logo.png')}
                    style={styles.logoImage}
                />

                <Text style={styles.logoText}>SUPER APP</Text>
            </View>



            <View style={styles.form}>
                <Text style={styles.formText}>INGRESAR</Text>

                <CustomTextInput
                    image={require('../../../../assets/avatar.png')}
                    placeholder='Correo electrónico'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />

                <CustomTextInput
                    image={require('../../../../assets/password.png')}
                    placeholder='Contraseña'
                    keyboardType='default'
                    property='password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={onChange}
                />



                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='ENTRAR' onPress={() => {
                        console.log('Email: ' + email);
                        console.log('Password ' + password);
                    }} />
                </View>


                <View style={styles.formRegister}>
                    <Text>¿No tienes cuenta?</Text>
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

