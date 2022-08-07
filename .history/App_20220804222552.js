import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const theme =  {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator>
        <Stack.Screen />
        <Stack.Screen />
      </StackNavigator>
    </NavigationContainer>
  );
}

