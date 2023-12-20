import {  StatusBar } from 'react-native';
import { useFonts } from 'expo-font'

import { colors } from './src/Global/colors';
import Navigator from './src/navigation/Navigator';

export default function App() {
  const [fontLoaded] = useFonts({
    PlayfairDisplay: require('./assets/Fonts/PlayfairDisplay-Black.ttf')
  })
  if(!fontLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.peptalk} barStyle='default' />
      <Navigator/>

    </>
  );
}

 