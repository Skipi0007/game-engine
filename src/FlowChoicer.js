import React, {useState} from 'react'
import {story} from './story/story'
import {flowOne} from './story/flowOne'
import {StyleSheet, View, TextInput, Button, ImageBackground, TouchableOpacity, Text} from 'react-native'


export const FlowChoicer =({ storyFile, startNewFlow, storyPage, currentFlow }) => {

    let content 

    let contentMaker = () => {
        if (storyFile[currentFlow][storyPage].text != null) {
            return content = (
                <ImageBackground style={styles.images} source={story[storyPage].bg}>
                    <View style={styles.textDecoration}> 

                            
                        <Text style={styles.text}>{storyFile[currentFlow][storyPage].text}</Text>
                        <TouchableOpacity>
                            {storyFile[currentFlow][storyPage].choices.map(item => (                               
                                <Text key={item.key} style={styles.buttons} onPress={() => startNewFlow(item.key)}>{item.name}</Text> 
                            ))}
                        </TouchableOpacity>
                    </View>
                </ImageBackground>  
            )
        } else {
            return content = (
                <ImageBackground style={styles.images} source={story[storyPage].bg}>
                    <View style={styles.textDecoration}>  
                        
                        <TouchableOpacity>
                            {storyFile[currentFlow][storyPage].choices.map(item => (                               
                                <Text key={item.key} style={styles.buttons} onPress={() => startNewFlow(item.key)}>{item.name}</Text> 
                            ))}
                        </TouchableOpacity> 
                    </View>
                </ImageBackground> 
            )
        }
    }

    contentMaker()
  
    return (content)
}

const styles = StyleSheet.create({
    
    buttons: {
        marginTop: "3%",
        
        fontSize: 22,
        color: '#1E90FF'
    },


    text: {
        fontSize: 22,
        color: 'white', 
    },

    textDecoration: {
        
        paddingTop: 0,
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%'  
        
    },

    images: {
        width: '100%',
        height: '100%'
    },
})