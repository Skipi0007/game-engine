import React, {useState} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {story} from './story'




export const MainScreen = () => {
    let [storyPage, changePage] = useState(0)
    return (
        
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.textStyling}>{story[storyPage].text}</Text>
            </View>
            <View style={styles.buttons}>
                <Button  title="Continue" onPress={() => changePage(storyPage++)} />
                <Button  title="New game" onPress={() => changePage(prev => prev.filter(storyPage))}/>
            </View>
        </View>
        
    )    
      
}

const styles = StyleSheet.create({
    text: {
        paddingTop: 20,
        justifyContent: 'center',
        
        
    },

    textStyling: {
        borderColor: 'gray',
        borderWidth: 2,
    },

    
    buttons: {
        justifyContent: 'center',
        paddingTop: 250,
        flexDirection: 'row'
    }

  

})

