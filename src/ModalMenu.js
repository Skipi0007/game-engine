import React from 'react'
import {StyleSheet, View, Button, Modal} from 'react-native'


export const ModalMenu =({  visiblity, onCancel, setGame, saveStarter }) => {
    
    return (
        <Modal visible={visiblity} animationType="slide" transparent={true}>
            <View>
                
                    <Button title='Continue' onPress={onCancel}></Button>
                    <Button title='Save / Load' onPress = {()=>{saveStarter(), setGame(null)}}></Button>
                    <Button title='Main menu' onPress={()=>{setGame(null)}}></Button>
                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    
    buttons: {
        
    }
})