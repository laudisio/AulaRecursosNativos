import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './telas/Home';
import TelaContato from './telas/TelaContato';


const Stack = createStackNavigator();

export default function Router(){
    return (

        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="TelaContato" component={TelaContato}/>

        </Stack.Navigator>
    </NavigationContainer>


    )
}
