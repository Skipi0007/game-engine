import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {MainScreen} from './src/MainScreen'
import { story } from './src/story';


//попробовать стейты с состоянием переключения жкрана тру/фолс
export default function App() {
  let [storyPage, changePage] = useState(0)
  let [game, setGame] = useState(null)
  

  let content = (
    <View>
      <Button  title="Continue" onPress ={() => setGame(game++)}/>
      <Button  title="New Game" onPress ={newGame} />
      <Button  title="Load"/>
      <Button  title="Settings"/>
      <Button  title="Exit"/>
    </View>
  )

  let gameStop = () => {
    setGame(null)
  }

  let gameEnd = () => {
    setGame(null)
    changePage(0)
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

  

  if (game) {
    content = (
      <View>
        <MainScreen storyPage={storyPage} gameStop={gameStop} nextPage={nextPage}/>
      </View>
    )
  } else {
    content = (
      <View>
        <Button  title="Continue" onPress ={() => setGame(game++)}/>
        <Button  title="New Game" onPress ={newGame} />
        <Button  title="Load"/>
        <Button  title="Settings"/>
      </View>
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
