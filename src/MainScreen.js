import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native'
import {story} from './story'




export const MainScreen = ({storyPage, nextPage, gameStop}) => {
    
    return (
        
        <View style={styles.container}>
            <TouchableOpacity onPress={nextPage}>
            <View style={styles.text}>
                <Text style={styles.textStyling}>{story[storyPage].text}</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.buttons}>
                
                <Button  title="Exit" onPress ={gameStop}/>
            </View>
        </View>
        
    )    
      
}

const styles = StyleSheet.create({
    text: {
        paddingTop: 20,
        justifyContent: 'center',
        
        
    },

    textStyling: {
        borderColor: 'gray',
        borderWidth: 2,
    },

    
    buttons: {
        justifyContent: 'center',
        paddingTop: 150,
        flexDirection: 'row'
    }

  

})

