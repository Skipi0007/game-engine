import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground} from 'react-native'





export const MainMenu = ({continueGame, newGame , saveStarter}) => {
    
    return (
        <View>
            <ImageBackground style={styles.images} source={require('./story/imges/menuBg.jpg')}>
                <View style={styles.buttosBlock}>
                <Button  title="Continue" onPress = {continueGame}/>
                <Button  title="New Game" onPress = {newGame} />
                <Button  title="Load" onPress = {saveStarter}/>
                <Button  title="Settings"/>
                </View>
            </ImageBackground>
        </View>
    )}

const styles = StyleSheet.create({

    images: {
        width: '100%',
        height: '100%'
    },

    buttosBlock: {
        flexDirection: 'row',
        paddingTop: '40%',
        paddingLeft: '30%'
    }
    
})