import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground} from 'react-native'
import {story} from './story/story'




export const GameScreen = ({storyPage, nextPage, gameStop}) => {

    let bgImg = () => {
        return(toString('./story/imges/'+story[storyPage].bg))
    }
    
    return (
        
        <View style={styles.container}>
            <ImageBackground style={styles.images} source={{uri:bgImg()}}>
                
                <View style={styles.text} >
                    <Text  onPress={nextPage} style={styles.textStyling}>{story[storyPage].text}</Text>
                </View>
                
                <View style={styles.buttons}>
                    
                    <Button  title="Exit" onPress ={gameStop}/>
                </View>
            </ImageBackground>
        </View>
        
    )    
      
}

const styles = StyleSheet.create({
    container:{
        
    },

    text: {
        
        
        paddingTop: 20,
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'black',
        
        
        
        
    },

    textStyling: {
        fontSize: 22,
        color: 'white',
        
    },

    
    buttons: {
        justifyContent: 'center',
        paddingBottom: 100,
        flexDirection: 'row'
    },

    images: {
        width: '100%',
        height: '100%'
    }
    

})

