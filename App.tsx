import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import PostsScreen from './src/screens/PostsScreen';

const Drawer = createDrawerNavigator();

const App: FC = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Posts" component={PostsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
