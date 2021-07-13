import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground} from 'react-native'


export const MainButton =({ btnText, script }) => {
    
    return (
        <TouchableOpacity onPress={script}>
            <View style={styles.button}>
                <Text style={styles.text}>{btnText}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    text: {
        backgroundColor: 'grey',
        borderRadius: 2,
        color: 'white',
        fontSize: 20
    }
    
})