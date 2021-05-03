import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {GameScreen} from './src/GameScreen'
import {MainMenu} from './src/MainMenu'
import { story } from './src/story/story';


//попробовать стейты с состоянием переключения жкрана тру/фолс
export default function App() {
  let [storyPage, changePage] = useState(0)
  let [game, setGame] = useState(null)
  

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
      console.log('./story/imges/'+story[storyPage].bg)
      changePage(storyPage++)}
    else {
      gameEnd()
    }
  }

  

  if (game) {
    content = (
      <View>
        <GameScreen storyPage={storyPage} gameStop={gameStop} nextPage={nextPage}/>
      </View>
    )
  } else {
    content = (
      <MainMenu continueGame={continueGame} newGame={newGame}/>
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
