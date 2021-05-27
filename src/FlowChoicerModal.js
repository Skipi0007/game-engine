import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button, Modal, TouchableOpacity, Text} from 'react-native'


export const FlowChoicerModal =({ choices, gameStop, startNewFlow }) => {
  
    return (
        <Modal visible={true} transparent={true}>
            <View>
                <TouchableOpacity>
                    
                    
                    
                    { choices.map(item => (
                        <View key={item.key}>
                            
                            <Text style={styles.buttons} onPress={() => startNewFlow(item.key)}>{item.name}</Text>
                        </View>
                    )) }
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    
    buttons: {
        marginTop: "3%",
        marginBottom: "3%",
        fontSize: 22,
        color: '#1E90FF'
    }
})