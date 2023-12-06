import { Modal, View, Text, Button, StyleSheet } from "react-native"

const ModalDelete = ({ product, visible, onModal, onDelete }) => {

  return <Modal
    visible={visible}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>¿Está seguro que quiere eliminar el siguiente producto?</Text>
        <Text style={styles.modalTextProduct}>{product.title}  {product.price}$</Text>
    
        <Button title="Delete" onPress={onDelete} />
        <Button title="Close" onPress={()=> onModal(false)} />
        
      </View>
    </View>
  </Modal>
}

const styles = StyleSheet.create({
  modalContent: {
    width: "90%",
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    gap: 15,
  },
  modalContainer: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    
  },
  modalText: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  modalTextProduct: {
      textAlign: 'center',
      fontWeight: '500'
  }
})
export default ModalDelete