import Header from '../components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/Cart';


const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    
      <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={
          ({ route }) => {
            return {
              header: () => {
                return <Header title='Cart' />
              }
            }
          }
        }>
        <Stack.Screen name="Cart" component={Cart} />
 
      </Stack.Navigator>
  
  )
}

export default CartStack