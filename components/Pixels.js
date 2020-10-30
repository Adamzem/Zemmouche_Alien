import React from 'react';
import { View, StyleSheet } from 'react-native';
import Row from './Row'


const Pixels = ({ number, blank }) => {

    let pixels = []
    for (let index = 0; index < number; index++) {
        pixels = [
            ...pixels,
            <View key={index} style={[styles.pixels, blank && styles.blankPixels]} />
        ]

    }
    return <Row>{pixels}</Row>
}

const pixelLenght = 20



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    pixels: {
        width: pixelLenght,
        height: pixelLenght,
        backgroundColor: 'orange'
    },
    blankPixels: {
        backgroundColor: 'transparent'
    }
})






export default Pixels