import React from 'react';
import { Text,StyleSheet, Pressable } from 'react-native';

export default function Button({ onPress, title }){

    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: 'black',
        marginVertical:10
    },
    text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        color: 'white',
    },
});