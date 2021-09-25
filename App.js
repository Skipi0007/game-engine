import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {GameScreen} from './src/GameScreen'
import {MainMenu} from './src/MainMenu'
import { story } from './src/story/story';
import {flowOne} from './src/story/flowOne'
import { SaveScreen } from './src/SaveScreen';
import { Audio } from 'expo-av';
import {AppNavigation} from './src/navigation/AppNavigation';
// import {NavigationContainer } from '@react-navigation/native'
// import {createNativeStackNavigator } from '@react-navigation/stack'



export default function App() {
  let [storyPage, changePage] = useState(0)
  let [currentFlow, setCurrentFlow] = useState(0)
  let [game, setGame] = useState(null)
  let [saveStart, setSaveStart] = useState(null)
  let [save, setSave] = useState([
    {flowNum: null, screenNum:null},
    {flowNum: null, screenNum:null},
    {flowNum: null, screenNum:null},
    {flowNum: null, screenNum:null},
    {flowNum: null, screenNum:null},
    {flowNum: null, screenNum:null}
])

  // const Stack = createNativeStackNavigator();

  // let content = (
  //   <MainMenu continueGame={continueGame} newGame={newGame}/>
  // )

  // const continueGame = () => {
  //   setGame(++game)
  // }

  // const newGame = () => {
  //   changePage(0)
  //   setGame(++game)
  // } 

  const nav = (navigation, screenName) => {

  }

  if (game != null) {
    content = (
      <View>
        
        <GameScreen changePage={changePage} currentFlow={currentFlow} setCurrentFlow={setCurrentFlow} startNewFlow={() => {changePage(0)}} storyPage={storyPage} setGame={setGame} saveStarter={() => {setSaveStart(++saveStart)}}/>
        
                    
        
                
      </View>
    )
  } else if (saveStart != null) {
    content = (
      
        <SaveScreen save={save} setSave={setSave} game={game} changePage={changePage} currentFlow={currentFlow} setCurrentFlow={setCurrentFlow} setGame={setGame} onExit={() => {setSaveStart(null)}} storyPage={storyPage} />
      
    )
  } 
  
  else {
    content = (
      
      <MainMenu continueGame={continueGame} newGame={newGame} saveStarter={() => {setSaveStart(++saveStart)}}/>
    )
  }

  return (
    <AppNavigation/>
    )
  // <AppNavigation el={content}/>
  // (
  //   <View>{content}</View>  
  // );
}

const styles = StyleSheet.create({
  container: {
      
  }



})

