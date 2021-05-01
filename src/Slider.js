import React, {useState} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {story} from './story'



export const Slider = ({i}) => {
    return (
        
        <View style={styles.container}>
            <Text style={styles.text}>{story[i].text}</Text>
        </View>
    )    
      
}