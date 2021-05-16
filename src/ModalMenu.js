import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button, Modal, Alert} from 'react-native'


export const ModalMenu =({  visiblity, onCancel, gameStop, saveStarter, setSaveScreen, setVisiblity }) => {
    
    return (
        <Modal visible={visiblity} animationType="slide" transparent={true}>
            <View>
                
                    <Button title='Continue' onPress={onCancel}></Button>
                    <Button title='Save / Load' onPress = {saveStarter}></Button>
                    <Button title='Main menu' onPress={gameStop}></Button>
                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    
    buttons: {
        
    }
})