import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapScreen from './screens/MapScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {


  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            >
            </Stack.Screen>

            <Stack.Screen
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            >
            </Stack.Screen>

          </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
