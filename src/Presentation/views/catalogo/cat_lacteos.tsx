import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../components/RoundedButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


export const catLacteos = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (

        <View style={styles.container}>

            <View style={{ marginTop: 30 }}>

            </View>

            <Text style={styles.containerText}>Productos</Text>


            <View style={styles.productos}>
                <Image
                    source={require('../../../../assets/alpina_queso.png')}
                    style={styles.imageProductos}
                />
                <View style={styles.productosText}>
                    <Text style={styles.title}>Cremosino, Queso para untar - Alpina</Text>
                    <Text style={styles.productosText}>Valor Unidad: $10.000</Text>
                    <Text style={styles.productosText}>Stock: 220</Text>
                </View>
            </View>

            <View style={styles.productos}>
                <Image
                    source={require('../../../../assets/bonyurt.png')}
                    style={styles.imageProductos}
                />
                 <View style={styles.productosText}>
                    <Text style={styles.title}>Bon yurt with cookie pieces - Alpina</Text>
                    <Text style={styles.productosText}>Valor Unidad: $5.000</Text>
                    <Text style={styles.productosText}>Stock: 290</Text>
                </View>
            </View >

            <View style={styles.productos}>
                <Image
                    source={require('../../../../assets/yogurt.png')}
                    style={styles.imageProductos}
                />
                 <View style={styles.productosText}>
                    <Text style={styles.title}>Yogurt con trozos de fruta, mora - Alpina</Text>
                    <Text style={styles.productosText}>Valor Unidad: $22.000</Text>
                    <Text style={styles.productosText}>Stock: 500</Text>
                </View>
            </ View>

        </View>
    )
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#D6616F',
    },

    containerText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'serif',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    productos: {
        backgroundColor: 'white',
        width: '88%',
        height: '28%',
        margin: 'auto',
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
        flexDirection: "row",
        alignItems: "center", 
        flexWrap: "wrap",
    },

    imageProductos: {
        width: '40%',
        height: '55%',
        top: '28%',
        margin: 'auto',
        left: '2%',
        position: 'absolute',
        marginRight: 10,
    },

    productosText: {
        top: '25%',
        left: '24%',
        width: '60%',
    },

    title: {
        top: '25%',
        fontWeight: "bold",
        marginBottom: 5,
        flexWrap: "wrap",
        width: '60%',
        left: '24%',
    },

});