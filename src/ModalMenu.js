import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button, Modal, Alert} from 'react-native'


export const ModalMenu =({ visiblity, onCancel, gameStop, saveStarter, setSaveScreen }) => {
    
    return (
        <Modal visible={visiblity} animationType="slide" transparent={true}>
            <View>
                
                    <Button title='Continue' onPress={onCancel}></Button>
                    <Button title='Save' onPress = {saveStarter, setSaveScreen}></Button>
                    <Button title='Load' onPress = {saveStarter, setSaveScreen}></Button>
                    <Button title='Main menu' onPress={gameStop}></Button>
                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    
    buttons: {
        
    }
})