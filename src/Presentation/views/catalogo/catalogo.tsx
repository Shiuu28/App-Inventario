import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, Touchable, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { RoundedButton } from '../../components/RoundedButton';


export const CategoriasScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>


            <View style={styles.catalogo}>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='LÁCTEOS' onPress={() =>
                        navigation.navigate('cat_lacteos')}>
                    </RoundedButton>
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='FRUTAS' onPress={() =>
                        navigation.navigate('HomeScreen')}>
                    </RoundedButton>
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='VERDURAS' onPress={() =>
                        navigation.navigate('HomeScreen')}>
                    </RoundedButton>
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='CARNES' onPress={() =>
                        navigation.navigate('HomeScreen')}>
                    </RoundedButton>
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='ASEO' onPress={() =>
                        navigation.navigate('HomeScreen')}>
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


    catalogo: {
        width: '100%',
        height: '65%',
        position: 'absolute',
        padding: 30,
        top: '20%',
    }
});
