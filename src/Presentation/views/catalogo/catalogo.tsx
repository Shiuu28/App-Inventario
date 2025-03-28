import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, Touchable, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { RoundedButton } from '../../components/RoundedButton';
import useProfileInfoViewModel from './viewModel';


export const CategoriasScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { removeSession } = useProfileInfoViewModel();

    return (
        <View style={styles.container}>

            <Text style={styles.textContainer}>Categorías</Text>

            <View style={styles.catalogo}>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='LÁCTEOS' onPress={() =>
                        navigation.navigate('catLacteos')}>
                    </RoundedButton>
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='FRUTAS' onPress={() =>
                        navigation.navigate('catFrutas')}>
                    </RoundedButton>
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='VERDURAS' onPress={() =>
                        navigation.navigate('catVerduras')}>
                    </RoundedButton>
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='CARNES' onPress={() =>
                        navigation.navigate('catCarnes')}>
                    </RoundedButton>
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='ASEO' onPress={() =>
                        navigation.navigate('catAseo')}>
                    </RoundedButton>
                </View>

                <View style={{ marginTop: 95 }}>
                    <RoundedButton text='CERRAR SESION' onPress={() =>
                        navigation.navigate('HomeScreen')}>
                        <Image
                            source={require('../../../../assets/cerrar-sesion.png')}
                            style={styles.cerrarSesion}
                        />
                    </RoundedButton>

                </View>

            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6616F',
    },

    textContainer: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 60,
        textAlign: 'center',
        top: '10%',
        fontFamily: 'serif',
        fontStyle: 'italic',
    },

    catalogo: {
        width: '100%',
        height: '65%',
        position: 'absolute',
        padding: 30,
        top: '20%',
    },

    cerrarSesion:{
        width: 33,
        height: 33,
    }
});
