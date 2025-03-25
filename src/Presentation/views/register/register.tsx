import React from 'react'
import { View, Text, ScrollView, Image, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';
import useRegisterViewModel from './viewModel';

export const RegisterScreen = () => {

    const { name, lastname, phone, email, password, confirmPassword, onChange, register } = useRegisterViewModel();

    useEffect(() => {
        if (errorMessage !== '')
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
    }, [errorMessage]);

    return (

        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/user.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
            </View>



            <View style={styles.form}>
                <ScrollView>
                    <Text style={styles.formText}>REGISTRARSE</Text>

                    <CustomTextInput
                        image={require('../../../../assets/avatar.png')}
                        placeholder='Nombres'
                        keyboardType='default'
                        property='name'
                        onChangeText={onChange}
                        value={name}
                    />


                    <CustomTextInput
                        image={require('../../../../assets/avatar.png')}
                        placeholder='Apellidos'
                        keyboardType='default'
                        property='lastname'
                        onChangeText={onChange}
                        value={lastname}
                    />


                    <CustomTextInput
                        image={require('../../../../assets/correo-electronico.png')}
                        placeholder='Correo electrónico'
                        keyboardType='email-address'
                        property='email'
                        onChangeText={onChange}
                        value={email}
                    />


                    <CustomTextInput
                        image={require('../../../../assets/llamar.png')}
                        placeholder='Teléfono'
                        keyboardType='numeric'
                        property='phone'
                        onChangeText={onChange}
                        value={phone}
                    />


                    <CustomTextInput
                        image={require('../../../../assets/password.png')}
                        placeholder='Contraseña'
                        keyboardType='default'
                        property='password'
                        onChangeText={onChange}
                        value={password}
                        secureTextEntry={true}
                    />


                    <CustomTextInput
                        image={require('../../../../assets/password.png')}
                        placeholder='Confirmar Contraseña'
                        keyboardType='default'
                        property='confirmPassword'
                        onChangeText={onChange}
                        value={confirmPassword}
                        secureTextEntry={true}
                    />

                    <View style={{ marginTop: 30 }}>
                        <RoundedButton text='CONFIRMAR' onPress={() => register()} />
                    </View>
                </ScrollView>
            </View>

        </View>
    );
}




