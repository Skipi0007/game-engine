import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground} from 'react-native'





export const MainMenu = ({continueGame, newGame}) => {
    
    return (
        <View>
            <ImageBackground style={styles.images} source={require('./story/imges/menuBg.jpg')}>
                <Button  title="Continue" onPress ={continueGame}/>
                <Button  title="New Game" onPress ={newGame} />
                <Button  title="Load"/>
                <Button  title="Settings"/>
            </ImageBackground>
        </View>
    )}

const styles = StyleSheet.create({

    images: {
        width: '100%',
        height: '100%'
    },
    
})