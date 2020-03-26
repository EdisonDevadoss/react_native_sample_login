import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Login';
import ProductListScreen from '../ProductList';

const Stack = createStackNavigator();

export default function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{title: 'Product List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
