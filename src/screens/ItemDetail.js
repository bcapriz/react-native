import { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, useWindowDimensions, Image, Pressable } from 'react-native';
import allProducts from '../Data/products.json'
import { colors } from '../Global/colors';


const ItemDetail = ({ route }) => {
  const { id } = route.params
  const [product, setProduct] = useState({})
  const { width, height } = useWindowDimensions()
  const [lanscape, setLanscape] = useState(false)
  const images = product.images ? product.images : []

  useEffect(() => {
    const productFind = allProducts.find(product => product.id === id)
    setProduct(productFind)
  }, [id])

  useEffect(() => {
    if (width > height) {
      setLanscape(true)
    } else {
      setLanscape(false)
    }
  }, [width, height])



  return (
    <SafeAreaView style={lanscape ? styles.lanscapeContent : styles.content}>
      <Image style={lanscape ? styles.lanscapeImage : styles.image}
        source={{ uri: images[1] }}
        resizeMode='cover'
      />

      <View style={lanscape ? styles.lanscapeTextContainer : styles.textContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      <View style={lanscape ? styles.lanscapeContainerPrice : styles.containerPrice}>
        <Text style={styles.price}>${product.price}</Text>
        <Pressable style={styles.buyButton}>
          <Text style={styles.textBuy}> Buy Now</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default ItemDetail;


const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "start",
    alignItems: "center"
  },
  content: {
    flex: 1,
    width: "100%"
  },
  lanscapeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  image: {
    width: '100%',
    height: 300
  },
  lanscapeImage: {
    width: "30%",
    height: 200
  },
  title: {
    fontSize: 24,
    fontFamily: 'PlayfairDisplay'
  },
  textContainer: {
    gap: 15,
    paddingHorizontal: 5,
    paddingVertical: 25
  },
  lanscapeTextContainer: {
    width: "30%",
    flexDirection: 'column',
    gap: 20
  },
  description:{
  justifyContent:"center",
  width:"80%",
  fontSize:15,
  },
  price: {
    fontSize: 35
  },
  containerPrice: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10
  },
  lanscapeContainerPrice: {
    width: "30%",
    flexDirection: "column"
  },
  buyButton: {
    backgroundColor: colors.peptalk,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  textBuy: {
    color: colors.bleachedSilk,
    fontSize: 18,
  }
})