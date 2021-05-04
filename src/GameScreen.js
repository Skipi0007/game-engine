import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground, Modal} from 'react-native'
import {story} from './story/story'
import {ModalMenu} from './ModalMenu'




export const GameScreen = ({storyPage, nextPage, gameStop, saveStarter}) => {

    let [visiblity, setVisiblity] = useState(false)

    let onCancel = () => {
        setVisiblity(false)
    }
    
    return (
        
        <View style={styles.container} onCancel={onCancel}>
            
            <ImageBackground style={styles.images} source={story[storyPage].bg}>
                <ModalMenu visiblity={visiblity} gameStop={gameStop} onCancel={onCancel} saveStarter={saveStarter}/>
                <View style={styles.text} >
                    
                    <Text  onPress={nextPage} style={styles.textStyling}>{story[storyPage].text}</Text>
                </View>
            
                <View style={styles.buttons}>
                    
                    <Button  title="Menu" onPress ={()=>{setVisiblity(true)}}/>
                </View>
            </ImageBackground>
        </View>
        
    )    
      
}

const styles = StyleSheet.create({
    

    text: {
        
        
        paddingTop: 20,
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        
        
        
        
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
    },

    
    

})

