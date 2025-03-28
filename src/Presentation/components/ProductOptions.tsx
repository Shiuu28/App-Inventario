import React from "react"
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';


interface ImageProps {
    onPress: () => void,
}


export const ProductOptions = ({ onPress }: ImageProps) => {

    return (
        <View style={styles.EditProduct}>
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={require('../../../assets/editar.png')}
                    style={styles.edit}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../../../assets/quitar.png')}
                    style={styles.quitar}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    EditProduct: {
        width: 90,
        height: 40,
        top: 84,
        left: 174,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        display: 'flex',
    },

    edit: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginHorizontal: 3,
    },

    quitar: {
        width: 19,
        height: 19,
        resizeMode: 'contain',
        marginHorizontal: 3,
    },

}); 