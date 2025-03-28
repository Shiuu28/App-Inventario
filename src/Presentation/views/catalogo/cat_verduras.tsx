import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../components/RoundedButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ProductOptions } from '../../components/ProductOptions';


export const catVerduras = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (

        <View style={styles.container}>

            <View style={{ marginTop: 20, marginLeft: 30 }}>
                <RoundedButton text='AGREGAR' onPress={() =>
                    navigation.navigate('AddProduct')}
                    style={styles.smallButton}>
                    <Image
                        source={require('../../../../assets/agregar.png')}
                        style={styles.agregar}
                    />
                </RoundedButton>
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
                    <ProductOptions onPress={() =>
                        navigation.navigate('Modificar')}>
                    </ProductOptions>
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
                    <ProductOptions onPress={() =>
                        navigation.navigate('Modificar')}>
                    </ProductOptions>
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
                    <ProductOptions onPress={() =>
                        navigation.navigate('Modificar')}>
                    </ProductOptions>
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
        color: 'black',
        fontSize: 40,
        fontFamily: 'serif',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '4%',
        fontStyle: 'italic',
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
        marginBottom: '5%',
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

    agregar: {
        width: 24,
        height: 24,
    },

    smallButton: {
        width: '44%',
        height: 50,
        left: '52%',
        marginBottom: '6%',
    },

});