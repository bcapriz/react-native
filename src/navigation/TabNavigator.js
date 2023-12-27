import { NavigationContainer } from '@react-navigation/native';
import CartStack from './CartStack';
import ShopStack from './ShopStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { colors } from '../Global/colors';
import { Entypo } from '@expo/vector-icons'
import OrdersStack from './OrdersStack';
import TabIcon from '../components/TabIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarCenterContent: true,
        }}
      >
        <Tab.Screen
          name='ShopScreen'
          component={ShopStack}
          options={{
            tabBarIcon: ({focused}) => <TabIcon icon="shop" label="Shop" focused={focused} />
          }}
        />

        <Tab.Screen
          name='CartScreen'
          component={CartStack}
          options={{
            tabBarIcon: ({focused}) => <TabIcon icon="shopping-cart" label="Cart" focused={focused} />
          }}
        />

        <Tab.Screen
          name='OrdersScreen'
          component={OrdersStack}
          options={{
            tabBarIcon: ({focused}) =>  <TabIcon icon="list" label="Orders" focused={focused} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer >
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.alphabetBlue,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 18,
    height: 90,
    borderWidth: 2,
    borderColor: colors.soulstoneBlue,
    borderTopColor:colors.soulstoneBlue,
    borderTopWidth:2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:4
  },
  tabBarIcon: {
    marginTop:10
  },
})