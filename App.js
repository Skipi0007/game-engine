import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {MainScreen} from './src/MainScreen'


//попробовать стейты с состоянием переключения жкрана тру/фолс
export default function App() {

  let content = (
    <View>
      <Button  title="Continue"/>
      <Button  title="New Game" onPress ={() => {content = (<MainScreen />)} } />
      <Button  title="Load"/>
      <Button  title="Settings"/>
      <Button  title="Exit"/>
    </View>
  )

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
