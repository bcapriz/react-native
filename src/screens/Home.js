import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Categories from '../components/Categories';
import { useState } from 'react';



const Home = ({ navigation, route }) => {


  return (
    <>
      <Categories navigation={navigation} route={route} />
    </>
  )
}

export default Home

const styles = StyleSheet.create({

})