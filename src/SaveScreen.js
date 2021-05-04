import React from 'react'
import {StyleSheet, Text, Button, View, TouchableOpacity} from 'react-native'

export const SaveScreen = ({onExit}) => {

    return (
    
        <TouchableOpacity>
            <View style={styles.container}>
                <Button title="1"></Button>
                <Button title="2"></Button>
                <Button title="3"></Button>
            </View>
            <View style={styles.container}>
                <Button title="1"></Button>
                <Button title="2"></Button>
                <Button title="3"></Button>
                <Button title="Exit" onPress={onExit}></Button>
            </View>
        </TouchableOpacity>
    
    )

}   

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    }
})