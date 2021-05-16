import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground, Modal} from 'react-native'
import {story} from './story/story'
import {flowOne} from './story/flowOne'
import {ModalMenu} from './ModalMenu'
import {SaveScreen} from './SaveScreen'
import {FlowChoicerModal} from './FlowChoicerModal'
import { Audio } from 'expo-av';

export const GameScreen = ({startNewFlow, storyPage, nextPage, gameStop, saveStarter, save}) => {

    let [visiblity, setVisiblity] = useState(false)
    let [saveScreen, setSaveScreen] = useState(null)
    let [currentFlow, setCurrentFlow] = useState(0)
    let [storyFile, setStoryFile] = useState(
        [story, flowOne]
    )
    const [sound, setSound] = React.useState();

    

  async function playSound() {
      let counter = storyPage-1
      if (storyFile[currentFlow][counter] === undefined) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
        storyFile[currentFlow][storyPage].music
    );
    setSound(sound);

    console.log('Playing Sound', storyFile[currentFlow][storyPage].music);
    await sound.playAsync();}

    else if ( storyFile[currentFlow][counter].music != storyFile[currentFlow][storyPage].music ) {
        console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
        storyFile[currentFlow][storyPage].music
    );
    setSound(sound);

    console.log('Playing Sound', storyFile[currentFlow][storyPage].music);
    await sound.playAsync();}
    else {}
    }


    React.useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

  
        
    let flowChanger = (flowNum) => {
        startNewFlow()
        setCurrentFlow(flowNum)
        
    }
    
    let onCancel = () => {
        setVisiblity(false)
    }

    let nextSlide = () => {
            playSound()
            nextPage() 
        }
    

    

    let content
    
        if (saveScreen != null) {
            setSound(null)
           content = (<SaveScreen save={save} onExit={()=> {setSaveScreen(null)}}/>)
        }
        else if (storyFile[currentFlow][storyPage].choices != null) {
            setSound(null)
            content = (<FlowChoicerModal startNewFlow={flowChanger} gameStop={gameStop} choices={storyFile[currentFlow][storyPage].choices} />)
        } 
        else {
            
            content = (<View style={styles.container} onCancel={onCancel}>
            
            <ImageBackground style={styles.images} source={story[storyPage].bg}>
                <ModalMenu  visiblity={visiblity} gameStop={gameStop} onCancel={onCancel} saveStarter={saveStarter} setSaveScreen={()=> {setSaveScreen(saveScreen++)}}/>
                <View style={styles.text} >
                    <Text  onPress={nextSlide} style={styles.textStyling}>{storyFile[currentFlow][storyPage].text}</Text>
                    
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

