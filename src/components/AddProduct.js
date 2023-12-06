import { View, TextInput, Button, StyleSheet } from "react-native"

const AddProduct = ({ valueTitle, valuePrice, onChangeTitle, onChangePrice, addProduct }) => {

    return <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={valueTitle}
            onChangeText={(t) => onChangeTitle(t)}
        />
        <TextInput
            style={styles.input}
            placeholder="Precio"
            value={valuePrice}
            onChangeText={(t) => onChangePrice(t)}
        />
        <Button title="ADD" onPress={addProduct} />
    </View>
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        width: '95%',

    },
    input: {
        borderWidth: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: "30%"
    },
})

export default AddProduct;




