import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../components/RoundedButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


export const Modificar = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>Modificar Datos</Text>

            <View style={styles.product}>
                <Image
                    source={require('../../../../assets/alpina_queso.png')}
                    style={styles.img}
                />
            </View>


            <View style={styles.datos}>
                <View style={styles.row}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.value}>Cremosino, Queso para untar - Alpina</Text>
                </View>

                {/* Fila Cantidad */}
                <View style={styles.row}>
                    <Text style={styles.label}>Cantidad:</Text>
                    <Text style={styles.value}>220</Text>
                </View>

                {/* Fila Precio */}
                <View style={styles.row}>
                    <Text style={styles.label}>Precio:</Text>
                    <Text style={styles.value}>$10.000</Text>
                </View>

                <RoundedButton text='MODIFICAR' onPress={() =>
                    navigation.navigate('catLacteos')}>
                        <Image
                        source={require('../../../../assets/check.png')}
                        style={styles.editar}
                        />
                </RoundedButton>

            </View>
        </View>

    )
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#D6616F',
    },

    titulo: {
        fontSize: 37,
        fontFamily: 'serif',
        fontWeight: 'bold',
        textAlign: 'center',
        top: '6%',
        fontStyle: 'italic',
    },

    img: {
        width: 200,
        height: 200,
        top: '20%',
        backgroundColor: 'white',
        borderBlockColor: 'black',
        borderWidth: 2,
        position: 'absolute',
    },

    product: {
        width: 100,
        height: 100,
        marginTop: '20%',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    datos: {
        width: '90%',
        height: '40%',
        top: '50%',
        position: 'absolute',
        margin: 'auto',
        alignSelf: 'center',
        padding: 10,
    },

    row: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    label: {
        width: 90,
        height: 80,
        backgroundColor: 'lightgrey',
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 16,
        fontFamily: 'serif',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 5,
    },

    value: {
        width: 270,
        height: 80,
        backgroundColor: 'white',
        marginBottom: 20,
        fontSize: 15,
        fontFamily: 'serif',
        textAlign: 'center',
        flexWrap: 'wrap',
        padding: 10,
    },

    editar:{
        width: 24,
        height: 24,
    }
});