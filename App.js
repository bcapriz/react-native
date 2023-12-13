import { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid'
import ModalDelete from './src/components/ModalDelete';
import AddProduct from './src/components/AddProduct';
import ListProduct from './src/components/ListProduct';
import Home from './src/screens/Home'
import ItemListCategories from './src/screens/ItemListCategories';
import { useFonts } from 'expo-font'

export default function App() {

  const [newTitleProduct, setNewTitleProduct] = useState("");
  const [newPriceProduct, setNewPriceProduct] = useState('');
  const [products, setProducts] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [productSelected, setProductSelected] = useState({})

  const handlerAddProduct = () => {
    const newProduct = {
      id: uuid.v4(),
      title: newTitleProduct,
      price: newPriceProduct
    }

    setProducts(current => [...current, newProduct])
    setNewTitleProduct(""),
      setNewPriceProduct('')

  }

  const handlerModal = (item) => {
    setProductSelected(item)
    setModalVisible(true)
  }

  const handlerDeleteProduct = () => {
    setProducts(current => current.filter(product => product.id !== productSelected.id))
    setModalVisible(false)
  }

  const handlerCloseModal = () => {
    setModalVisible(false);
  };

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

      <AddProduct
        valueTitle={newTitleProduct}
        valuePrice={newPriceProduct}
        onChangeTitle={setNewTitleProduct}
        onChangePrice={setNewPriceProduct}
        addProduct={handlerAddProduct}
      />
      <ListProduct
        products={products}
        onModal={handlerModal}
      />
      <ModalDelete
        product={productSelected}
        visible={modalVisible}
        onModal={setModalVisible}
        onDelete={handlerDeleteProduct}
      />

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
