import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{
        title: 'Login',
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: "#ADFA09",
        },
        headerTitleStyle:{
            color: '#fff',
            fontWeight: 'bold',
        }
    }}/>

    <Stack.Screen name="register" component={Register} options={{
        title: 'Cadastrar Usuário',
        headerLeft: null,
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: "#ADFA09",
        },
        headerTitleStyle:{
            color: '#fff',
            fontWeight: 'bold',
        }
    }}/>

    <Stack.Screen name="main" component={Main} options={{
        title: 'Cards',
        headerLeft: null,
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: "#ADFA09",
        },
        headerTitleStyle:{
            color: '#fff',
            fontWeight: 'bold',
        }
    }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}