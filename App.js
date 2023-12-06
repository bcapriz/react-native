import { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid'
import ModalDelete from './src/components/ModalDelete';
import AddProduct from './src/components/AddProduct';
import ListProduct from './src/components/ListProduct';


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


  return (
    <View style={styles.container}>

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
    marginTop: 50,
  },
  listContainer: {
    width: "100%",
  },

});
