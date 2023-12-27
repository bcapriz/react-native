import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font'
import { colors } from './src/Global/colors';
import TabNavigator from './src/navigation/TabNavigator';
import { store } from './src/app/store'
import { Provider } from 'react-redux'


export default function App() {
  const [fontLoaded] = useFonts({
    PlayfairDisplay: require('./assets/Fonts/PlayfairDisplay-Black.ttf')
  })
  if (!fontLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.peptalk} barStyle='default' />
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    </>
  );
}

