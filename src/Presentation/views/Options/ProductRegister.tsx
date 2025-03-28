import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../components/RoundedButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


export const AddProduct = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>Registrar Producto</Text>

            <View style={styles.product}>
                <Image
                    source={require('../../../../assets/image.png')}
                    style={styles.img}
                />
                <Text style={styles.imageText}>Inserta una imagen</Text>
            </View>


            <View style={styles.datos}>
                <View style={styles.row}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.value}></Text>
                </View>

                {/* Fila Cantidad */}
                <View style={styles.row}>
                    <Text style={styles.label}>Cantidad:</Text>
                    <Text style={styles.value}></Text>
                </View>

                {/* Fila Precio */}
                <View style={styles.row}>
                    <Text style={styles.label}>Precio:</Text>
                    <Text style={styles.value}>$</Text>
                </View>

                <RoundedButton text='AGREGAR' onPress={() =>
                    navigation.navigate('catLacteos')}>
                        <Image
                        source={require('../../../../assets/agregar.png')}
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
        fontStyle: 'italic',
        top: '6%',
    },

    img: {
        width: 100,
        height: 100,
        top: '20%',
        backgroundColor: 'lightgrey',
        borderBlockColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        resizeMode: 'contain',    
    },

    imageText:{
        top: 74,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'serif',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },

    product: {
        width: '60%',
        height: '28%',
        marginTop: '20%',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
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