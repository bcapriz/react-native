import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid'
import ModalDelete from '../components/ModalDelete';
import AddProduct from '../components/AddProduct';
import ListProduct from '../components/ListProduct';
import Header from '../components/Header';
import { colors } from '../Global/colors';


const CreateProduct = () => {

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

  return (
    <View style={styles.container}>
      <Header title='Create Product'/>
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
export default CreateProduct;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.bleachedSilk,
        alignItems: 'center',
        marginTop: 0,
      },
      listContainer: {
        width: "100%",
      },
});





