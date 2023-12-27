import Header from '../components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Orders from '../screens/Orders';


const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    
      <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={
          ({ route }) => {
            return {
              header: () => {
                return <Header title='Cart' />
              }
            }
          }
        }>
        <Stack.Screen name="Orders" component={Orders} />
 
      </Stack.Navigator>
  
  )
}

export default OrdersStack