import React from 'react'
import {StyleSheet, Text, Button, View, TouchableOpacity} from 'react-native'

export const SaveScreen = ({onExit, addSave, storyPage , save}) => {

    

    return (
    
        <TouchableOpacity>
            <View style={styles.container}>
                <Button title={save[1].title} onPress={()=>{addSave( 1,  storyPage)}}></Button>
                <Button title={save[2].title} onPress={()=>{addSave( 2,  storyPage)}}></Button>
                <Button title={save[3].title} onPress={()=>{addSave( 3,  storyPage)}}></Button>
            </View>
            <View style={styles.container}>
                <Button title="4" onPress={()=>{addSave( 4,  storyPage)}}></Button>
                <Button title="5" onPress={()=>{addSave( 5,  storyPage)}}></Button>
                <Button title="6" onPress={()=>{addSave( 6,  storyPage)}}></Button>
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
        width:'20%',
        height: '40',
        
    }
})