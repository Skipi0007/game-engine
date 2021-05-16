import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {GameScreen} from './src/GameScreen'
import {MainMenu} from './src/MainMenu'
import { story } from './src/story/story';
import {flowOne} from './src/story/flowOne'
import { SaveScreen } from './src/SaveScreen';
import { Audio } from 'expo-av';



export default function App() {
  let [storyPage, changePage] = useState(0)
  let [game, setGame] = useState(null)
  let [saveStart, setSaveStart] = useState(null)
  let [save, setSave] = useState([
    {id: '1', screenNum:null, title: '1'},
    {id: '2', screenNum:null, title: '2'},
    {id: '3', screenNum:null, title: '3'},
    {id: '4', screenNum:null, title: '4'},
    {id: '5', screenNum:null, title: '5'},
    {id: '6', screenNum:null, title: '6'},
  ])

  

  let content = (
    <MainMenu continueGame={continueGame} newGame={newGame}/>
  )

  let gameStop = () => {
    setGame(null)
  }

  let gameEnd = () => {
    setGame(null)
    changePage(0)
  }

  let continueGame = () => {
    setGame(game++)
  }

  let newGame = () => {
    changePage(0)
    setGame(game++)
  }

  let nextPage = () => {
    if (storyPage < Object.keys(story).length){
      
      changePage(storyPage++)}
    else {
      gameEnd()
    }
  }

  const addSave = (id, screenNum) => {
    setSave(prev => [ ...prev,
      {
      id: id,
      screenNum: screenNum,
      title: Date.now().toString()
      }
    ])
  }

  const removeSave = id => {
    const todo = todos.find(t => t.id === id)
    Alert.alert(
    'Delete item',
    `Are you sure to delete "${todo.title}"?`,
    [
      {
        text: 'Cancel',
        style: 'cancel'
      },

      { text: 'Delete',
        style: 'destructive',
        onPress: () => {
          
          setSave(prev => prev.filter(todo => todo.id !== id))
        } 
      }
    ],
    { cancelable: false }
  );
    
  }

  const updateSave = (id, title) => {
    setSave(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }
  

  if (game != null) {
    content = (
      <View>
        
        <GameScreen startNewFlow={() => {changePage(0)}} save={save} storyPage={storyPage} gameStop={gameStop} nextPage={nextPage} saveStarter={() => {setSaveStart(saveStart++)}}/>
        
                    
        
                
      </View>
    )
  } else if (saveStart != null) {
    content = (
      
        <SaveScreen onExit={() => {setSaveStart(null)}} addSave={addSave} storyPage={storyPage} save={save}/>
      
    )
  } 
  
  else {
    content = (
      
      <MainMenu continueGame={continueGame} newGame={newGame} saveStarter={() => {setSaveStart(saveStart++)}}/>
    )
  }

  return (
    <View>
      {content}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
      
  }



})

