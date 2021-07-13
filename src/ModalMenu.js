import React from 'react'
import {StyleSheet, View, Button, Modal} from 'react-native'
import {MainButton} from './styles/MainButton'


export const ModalMenu =({  visiblity, onCancel, setGame, saveStarter }) => {
    
    return (
        <Modal visible={visiblity} animationType="slide" transparent={true}>
            <View style={styles.btnBlock}>                
                    <MainButton btnText={'Continue'} script={()=>{onCancel()}}/>
                    <MainButton btnText={'Save / Load'} script={()=>{saveStarter(), setGame(null)}}/>
                    <MainButton btnText={'Main menu'} script={()=>{setGame(null)}}/>                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    
    btnBlock: {
        width: '30%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    }
})