import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground} from 'react-native'
import {MainButton} from './styles/MainButton'




export const MainMenu = ({continueGame, newGame , saveStarter}) => {
    
    return (
        <View>
            <ImageBackground style={styles.images} source={require('./story/imges/menuBg.jpg')}>
                <View style={styles.buttosBlock}>
                    <MainButton btnText={"Continue"} script={continueGame}/>
                    <MainButton btnText={"New Game"} script={newGame}/>
                    <MainButton btnText={"Load"} script={saveStarter}/>
                    <MainButton btnText={"Settings"} />
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
        justifyContent: 'center',
        marginTop: '40%',
        
        
    },

    buttons: {
        
        color: '#696969',
        // backgroundColor: 'black',
        // borderRadius: 5,
        // paddingHorizontal: 20,
        // paddingVertical: 10,
        // fontSize: 10,
    }
    
})