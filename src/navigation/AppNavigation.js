import {NavigationContainer } from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack'
import {GameScreen} from '../GameScreen'
import {MainMenu} from '../MainMenu'
import {SaveScreen} from '../SaveScreen'

// const PostNavigator = createStackNavigator({
//     Main: MainMenu,
//     Post: {
//         screen: GameScreen
//     }
// }, {
//     initialRouteName: 'Main'
// })

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
        />
        <Stack.Screen
          name="GameScreen"
          component={GameScreen}
        />
        <Stack.Screen
          name="SaveScreen"
          component={SaveScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export const AppNavigation = createAppContainer(PostNavigator)