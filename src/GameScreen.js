import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground, Modal, Animated, delay} from 'react-native'
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
    let [stableText, setStableText] = useState(storyFile[currentFlow][storyPage].text)
    let [dinamicLetter, setDinamicLetter] = useState('')
    const [sound, setSound] = React.useState(null);

    

  async function playSound(flow, page) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
        storyFile[flow][page].music
    );
    setSound(sound);

    console.log('Playing Sound', storyFile[flow][page].music);
    await sound.playAsync();
    
    }
    
    React.useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

  
        
    const flowChanger = (flowNum, page, flow) => {

        startNewFlow()
        setCurrentFlow(flowNum)      
        
        if (sound != null && storyFile[flow][page].music != storyFile[flowNum][0].music) {
            sound.unloadAsync()
        }
        if (storyFile[currentFlow][storyPage].music != undefined &&
             storyFile[flow][page].music != storyFile[flowNum][0].music) {
            playSound(flowNum, 0)
        }
        setStableText(stableText='')
        setDinamicLetter(dinamicLetter='')
        textEffect()
    }
    
    const onCancel = () => {
        setVisiblity(false)
    }
    
    const currentSoundCheck = (counter) => {
        if (storyFile[currentFlow][counter-1].music === undefined)
        {}       
        else {if ( storyFile[currentFlow][counter-1].music != storyFile[currentFlow][storyPage].music ) {
                playSound(currentFlow, storyPage)
            }
            else {}
        }
    }   

    const checkUnloadSound = (counter) => {
        if (sound != null && storyFile[currentFlow][counter+1].music != storyFile[currentFlow][storyPage].music) {
            sound.unloadAsync()
        } 
    }
    
    // const textEffect = () => {
    //     console.log('textEffect started')
    //     let arr = storyFile[currentFlow][storyPage].text.toString().split('')
    //     let n = 0
        
    //     while  (n < Object.keys(arr).length) {

    //         if (dinamicLetter+stableText === '') {
    //             setDinamicLetter(dinamicLetter = arr[n].toString())
    //         } else {
    //             setStableText(stableText=stableText+dinamicLetter)      
    //             setDinamicLetter(dinamicLetter=arr[n].toString())
    //         }
    //         setTimeout(()=>{++n, console.log('timeout sterted')}, 3000)
    //         console.log('timeoutEnded')
    //     }      
    // }
    const textEffect = () => {
        let arr = storyFile[currentFlow][storyPage].text.toString().split('')
        console.log('start cycle')
        let n = 0
        while  (n < Object.keys(arr).length) {
            textAnimation(n, arr)
            ++n
            console.log(n+' sybol loged')
        }
        console.log('cycle complete n is '+n)
    }

    const textAnimation = (counter, array) => {
        if (counter === 0) {
            console.log('1st symbol try to log')
            setTimeout(()=>{setDinamicLetter(dinamicLetter = array[counter].toString())}, 10)
            console.log('1st symbol to loged') 
        }
        else {
            console.log('other symbol try to log')
            setTimeout(()=>{
            setStableText(stableText=stableText+dinamicLetter)      
            setDinamicLetter(dinamicLetter=array[counter].toString())
            }, counter*10)  
            console.log('other symbol to loged') 
        }
    }

    const nextSlide = () => {
        setStableText(stableText='')
        setDinamicLetter(dinamicLetter='')
        if (Object.keys(storyFile[currentFlow][storyPage].text).length != 1 && textCounter < Object.keys(storyFile[currentFlow][storyPage].text).length-1) {
            setTextCounter(++textCounter)
            textEffect()
            
        } else {
            if (storyPage < Object.keys(storyFile[currentFlow]).length-1){ 
                let counter=storyPage
                checkUnloadSound(counter)   
                changePage(++storyPage)
                counter=storyPage
                currentSoundCheck(counter)
                textEffect()
            }
            else {
                setGame(null)
                changePage(0)
              }
            
            setTextCounter(0)
            // textEffect()
        }
    }
    

    

    let content
        //saveScreen flow
        if (saveScreen != null) {
            setSound(null)
           content = (<SaveScreen onExit={()=> {setSaveScreen(null)}}/>)
        }

        //flowChoice flow
        else if (storyFile[currentFlow][storyPage].choices != null) {

            if (storyFile[currentFlow][storyPage].text != null) {
                content = (
                    <ImageBackground style={styles.images} source={story[storyPage].bg}>
                        <ModalMenu saveStarter={saveStarter} setVisiblity={setVisiblity} visiblity={visiblity} 
                        setGame={setGame} onCancel={onCancel} setSaveScreen={()=> {setSaveScreen(++saveScreen)}}/>
                        <View style={styles.textDecoration}>                               
                            <Text style={styles.text}>{stableText+dinamicLetter}</Text>
                            <TouchableOpacity>
                                {storyFile[currentFlow][storyPage].choices.map(item => (                               
                                    <Text key={item.key} style={styles.flowButtons} onPress={() => flowChanger(item.key, storyPage, currentFlow)}>{item.name}</Text> 
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
                        <ModalMenu saveStarter={saveStarter} setVisiblity={setVisiblity} visiblity={visiblity} setGame={setGame} onCancel={onCancel} setSaveScreen={()=> {setSaveScreen(++saveScreen)}}/>
                        <View style={styles.textDecoration}>  
                            
                            <TouchableOpacity>
                                {storyFile[currentFlow][storyPage].choices.map(item => (                               
                                    <Text key={item.key} style={styles.flowButtons} onPress={() => flowChanger(item.key, storyPage, currentFlow)}>{item.name}</Text> 
                                ))}
                            </TouchableOpacity> 
                        </View>
                        <View style={styles.buttons}>
                            <Button  title="Menu" onPress ={()=>{setVisiblity(true)}}/>
                        </View>
                    </ImageBackground> 
                )
            }

        } else {
            // app start screen
            if (sound === null && storyFile[currentFlow][storyPage].music != undefined) {
                playSound(currentFlow, storyPage)
            }
            content = (<View style={styles.container} onCancel={onCancel}>
            
            <ImageBackground style={styles.images} source={story[storyPage].bg}>
                <ModalMenu saveStarter={saveStarter} setVisiblity={setVisiblity} visiblity={visiblity} setGame={setGame} onCancel={onCancel} setSaveScreen={()=> {setSaveScreen(++saveScreen)}}/>
                <View style={styles.textDecoration} >
                    <Text  onPress={nextSlide} style={styles.text}>
                        {stableText+dinamicLetter}
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

