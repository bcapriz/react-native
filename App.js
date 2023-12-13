import { useState } from 'react';
import {StyleSheet,  View } from 'react-native';
import Home from './src/screens/Home'
import ItemListCategories from './src/screens/ItemListCategories';
import { useFonts } from 'expo-font'


export default function App() {
  const [categorySelected, setCategorySelected] = useState('')
 
  const [fontLoaded] = useFonts({
    PlayfairDisplay: require('./assets/Fonts/PlayfairDisplay-Black.ttf')
  })
  

  return (
    <View style={styles.container}>
       {categorySelected ? <ItemListCategories category={categorySelected} />
        :
        <Home setCategorySelected={setCategorySelected} />
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 0,
  },
  listContainer: {
    width: "100%",
  },

});
