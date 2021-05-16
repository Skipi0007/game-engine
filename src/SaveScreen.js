import React, {useState} from 'react'
import {StyleSheet, Text, Button, View, TouchableOpacity} from 'react-native'

export const SaveScreen = ({onExit, storyPage, setCurrentFlow, currentFlow, changePage, setGame, game }) => {
    
    let [save, setSave] = useState([
        {flowNum: null, screenNum:null},
        {flowNum: null, screenNum:null},
        {flowNum: null, screenNum:null},
        {flowNum: null, screenNum:null},
        {flowNum: null, screenNum:null},
        {flowNum: null, screenNum:null}
    ])

    let saver = (cell, screen, flow) => {
        return (
        save[cell].screenNum = screen, 
        save[cell].flowNum = flow)
        
    }

    let loader =(cell) => {
        return (
        setCurrentFlow(currentFlow = save[cell].flowNum), 
        changePage(storyPage = save[cell].screenNum),
        setGame(game++),
        onExit()
        )
    }
    
    return (
    
        <TouchableOpacity>
            <View style={styles.container}>
                <Button title='1' onPress={()=>{saver( 0,  storyPage, currentFlow)}} onLongPress={()=>{loader(0)}}></Button>
                <Button title='2' onPress={()=>{saver( 1,  storyPage, currentFlow)}} onLongPress={()=>{loader(1)}}></Button>
                <Button title='3' onPress={()=>{saver( 2,  storyPage, currentFlow)}} onLongPress={()=>{loader(2)}}></Button>
            </View>
            <View style={styles.container}>
                <Button title="4" onPress={()=>{saver( 3,  storyPage, currentFlow)}} onLongPress={()=>{loader(3)}}></Button>
                <Button style={styles.buttons} title="5" onPress={()=>{saver( 4,  storyPage, currentFlow)}} onLongPress={()=>{loader(4)}}></Button>
                <Button style={styles.buttons} title="6" onPress={()=>{loader(4)}} onLongPress={()=>{loader(5)}}></Button>
                <Button title="Exit" onPress={onExit}></Button>
            </View>
        </TouchableOpacity>
    
    )

}   

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },

    buttons: {
        width:'50',
        height: '50',
        
    }
})