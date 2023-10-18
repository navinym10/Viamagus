import * as React from 'react';

// screens
import Screen1 from './Source/Screens/Screen1';
import Screen2 from './Source/Screens/Screen2';
import Screen3 from './Source/Screens/Screen3';

// navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Screen1" component={Screen1} options={{ animation: "slide_from_right" }} />
                <Stack.Screen name="Screen2" component={Screen2} options={{ animation: "slide_from_right" }} />
                <Stack.Screen name="Screen3" component={Screen3} options={{ animation: "slide_from_right" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}