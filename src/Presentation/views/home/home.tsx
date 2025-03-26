import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../components/RoundedButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';
import useHomeViewModel from './viewModel';


export const HomeScreen = () => {

    const { email, password, errorMessage, onChange, login } = useHomeViewModel();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        if (errorMessage !== ' ') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage]);

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
                    <RoundedButton text='ENTRAR' onPress={() => { login();
                    navigation.navigate('CategoriasScreen');
                    }}
                    />
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

