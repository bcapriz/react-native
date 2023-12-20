import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ItemListCategories from '../screens/ItemListCategories';
import ItemDetail from '../screens/ItemDetail';
import Header from '../components/Header';

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
          ({ route }) => {
            return {
              header: () => {
                return <Header title={
                  route.name === 'Home' ? 'Categories' :
                    route.name === 'ItemListCategories' ? route.params.category :
                      'Detalle Producto'
                } />
              }
            }
          }
        }>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={ItemListCategories} />
        <Stack.Screen name="Product" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default Navigator