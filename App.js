import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import TaskFormScreean from "./screens/TaskFormScreean.js"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
         name="HomeScreen."
         component={HomeScreen}
         options={({navigation}) => ({
          title: "Aplicacion de tareas",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle:{color: "#ffffff"},
          headerRight:() =>(
            <TouchableOpacity onPress={() => navigation.navigate("TaskFormScreean")}
            
            >
            <Text style={{color:"#ffffff", marginRight: 20, fontSize:15}}>New</Text>
            </TouchableOpacity>
          ),
         })}
          />
        <Stack.Screen name="TaskFormScreean" component={TaskFormScreean}
        options={{
          title: "Crear nueva tarea",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle:{color: "#ffffff"},
          headerTintColor: "#ffffff",
          
        }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

