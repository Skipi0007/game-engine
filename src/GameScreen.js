import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground, Modal} from 'react-native'
import {story} from './story/story'
import {flowOne} from './story/flowOne'
import {ModalMenu} from './ModalMenu'
import {SaveScreen} from './SaveScreen'
import {FlowChoicerModal} from './FlowChoicerModal'




export const GameScreen = ({startNewFlow, storyPage, nextPage, gameStop, saveStarter, save}) => {

    let [visiblity, setVisiblity] = useState(false)
    let [saveScreen, setSaveScreen] = useState(null)
    let [currentFlow, setCurrentFlow] = useState(0)
    let [storyFile, setStoryFile] = useState(
        [story, flowOne]
    )
        
    let flowChanger = (flowNum) => {
        startNewFlow()
        setCurrentFlow(flowNum)
        
    }
    
    let onCancel = () => {
        setVisiblity(false)
    }

    let content
    
        if (saveScreen != null) {
           content = (<SaveScreen save={save} onExit={()=> {setSaveScreen(null)}}/>)
        }
        else if (storyFile[currentFlow][storyPage].choices != null) {
            content = (<FlowChoicerModal startNewFlow={flowChanger} gameStop={gameStop} choices={storyFile[currentFlow][storyPage].choices} />)
        } 
        else {
            content = (<View style={styles.container} onCancel={onCancel}>
            
            <ImageBackground style={styles.images} source={story[storyPage].bg}>
                <ModalMenu  visiblity={visiblity} gameStop={gameStop} onCancel={onCancel} saveStarter={saveStarter} setSaveScreen={()=> {setSaveScreen(saveScreen++)}}/>
                <View style={styles.text} >
                    <Text  onPress={nextPage} style={styles.textStyling}>{storyFile[currentFlow][storyPage].text}</Text>
                    
                </View>
            
                <View style={styles.buttons}>
                    <Button  title="Menu" onPress ={()=>{setVisiblity(true)}}/>
                </View>
            </ImageBackground>
            </View>)
        }
    
        
    
    return (content)
      
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

