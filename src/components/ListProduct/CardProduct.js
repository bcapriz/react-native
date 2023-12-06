import { View, Text, Button, StyleSheet } from 'react-native'

const CardProduct = ({item, onModal}) => {
    return <View style={styles.cardProduct}>
        <Text>{item.title}</Text>
        <Text> {item.price}$</Text>
        <Button title='DEL' onPress={() => onModal(item)} />
    </View>
}


const styles = StyleSheet.create({
    cardProduct: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        justifyContent: "space-around",
        alignItems: 'center',
        borderWidth: 3
    }
});

export default CardProduct;
