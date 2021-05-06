import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button, Modal, TouchableOpacity, Text} from 'react-native'


export const FlowChoicerModal =({ choices, gameStop, startNewFlow }) => {

   

    
    return (
        <Modal visible={true} transparent={false}>
            <View>
                <TouchableOpacity>
                    
                    
                    <Button title='Otval pizdi' onPress={gameStop}></Button>
                    <Button title='Otval pizdi' onPress={gameStop}></Button>
                    <Button title='Otval pizdi' onPress={gameStop}></Button>
                    <Button title='Otval pizdi' onPress={gameStop}></Button>
                    { choices.map(item => (
                        <View key={item.key}>
                            <Text onPress={() => startNewFlow(item.key)}>{item.name}</Text>
                        </View>
                    )) }
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    
    buttons: {
        
    }
})