import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground, Modal} from 'react-native'
import {story} from './story/story'
import {flowOne} from './story/flowOne'
import {ModalMenu} from './ModalMenu'
import {SaveScreen} from './SaveScreen'
import { Audio } from 'expo-av';

export const GameScreen = ({ currentFlow, setCurrentFlow, startNewFlow, storyPage, changePage, setGame, saveStarter}) => {

    let [visiblity, setVisiblity] = useState(false)
    let [saveScreen, setSaveScreen] = useState(null)
    let [textCounter, setTextCounter] = useState(0)
    let [storyFile, setStoryFile] = useState(
        [story, flowOne]
    )
    const [sound, setSound] = React.useState();

    

//   async function playSound() {
//       let counter = storyPage-1
//       if (storyFile[currentFlow][counter] === undefined) {
//     console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync(
//         storyFile[currentFlow][storyPage].music
//     );
//     setSound(sound);

//     console.log('Playing Sound', storyFile[currentFlow][storyPage].music);
//     await sound.playAsync();}

//     else if ( storyFile[currentFlow][counter].music != storyFile[currentFlow][storyPage].music ) {
//         console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync(
//         storyFile[currentFlow][storyPage].music
//     );
//     setSound(sound);

//     console.log('Playing Sound', storyFile[currentFlow][storyPage].music);
//     await sound.playAsync();}
//     else {}
//     }


//     React.useEffect(() => {
//         return sound
//           ? () => {
//               console.log('Unloading Sound');
//               sound.unloadAsync(); }
//           : undefined;
//       }, [sound]);

  
        
    const flowChanger = (flowNum) => {
        startNewFlow()
        setCurrentFlow(flowNum)
        
    }
    
    const onCancel = () => {
        setVisiblity(false)
    }

       

    const nextSlide = () => {
        if (Object.keys(storyFile[currentFlow][storyPage].text).length != 1 && textCounter < Object.keys(storyFile[currentFlow][storyPage].text).length-1) {
            setTextCounter(textCounter=textCounter+1)
            
        } else {
            if (storyPage < Object.keys(storyFile[currentFlow]).length-1){     
                changePage(storyPage=storyPage+1)}
            else {
                setGame(null)
                changePage(0)
              }
            // playSound()
            setTextCounter(0)
        }
    }
    

    

    let content

        if (saveScreen != null) {
            setSound(null)
           content = (<SaveScreen onExit={()=> {setSaveScreen(null)}}/>)
        }
        else if (storyFile[currentFlow][storyPage].choices != null) {

            if (storyFile[currentFlow][storyPage].text != null) {
                content = (
                    <ImageBackground style={styles.images} source={story[storyPage].bg}>
                        <ModalMenu saveStarter={saveStarter} setVisiblity={setVisiblity} visiblity={visiblity} setGame={setGame} onCancel={onCancel} setSaveScreen={()=> {setSaveScreen(saveScreen++)}}/>
                        <View style={styles.textDecoration}>                               
                            <Text style={styles.text}>{storyFile[currentFlow][storyPage].text}</Text>
                            <TouchableOpacity>
                                {storyFile[currentFlow][storyPage].choices.map(item => (                               
                                    <Text key={item.key} style={styles.flowButtons} onPress={() => flowChanger(item.key)}>{item.name}</Text> 
                                ))}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttons}>
                            <Button  title="Menu" onPress ={()=>{setVisiblity(true)}}/>
                        </View>
                    </ImageBackground>  
                )
            } else {
                content = (
                    <ImageBackground style={styles.images} source={story[storyPage].bg}>
                        <ModalMenu saveStarter={saveStarter} setVisiblity={setVisiblity} visiblity={visiblity} setGame={setGame} onCancel={onCancel} setSaveScreen={()=> {setSaveScreen(saveScreen++)}}/>
                        <View style={styles.textDecoration}>  
                            
                            <TouchableOpacity>
                                {storyFile[currentFlow][storyPage].choices.map(item => (                               
                                    <Text key={item.key} style={styles.flowButtons} onPress={() => flowChanger(item.key)}>{item.name}</Text> 
                                ))}
                            </TouchableOpacity> 
                        </View>
                        <View style={styles.buttons}>
                            <Button  title="Menu" onPress ={()=>{setVisiblity(true)}}/>
                        </View>
                    </ImageBackground> 
                )
            }
            // setSound(null)
        } else {
            
            content = (<View style={styles.container} onCancel={onCancel}>
            
            <ImageBackground style={styles.images} source={story[storyPage].bg}>
                <ModalMenu saveStarter={saveStarter} setVisiblity={setVisiblity} visiblity={visiblity} setGame={setGame} onCancel={onCancel} setSaveScreen={()=> {setSaveScreen(saveScreen++)}}/>
                <View style={styles.textDecoration} >
                    <Text  onPress={nextSlide} style={styles.text}>
                        {storyFile[currentFlow][storyPage].text[textCounter]}
                    </Text>                    
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

    
    buttons: {
        justifyContent: 'center',
        flexDirection: 'row'
    },

    images: {
        width: '100%',
        height: '100%'
    },

    flowButtons: {
        marginTop: "3%",
        fontSize: 22,
        color: '#1E90FF'
    },
    

})

