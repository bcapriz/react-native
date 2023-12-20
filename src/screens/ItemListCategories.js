
import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import allProducts from '../Data/products.json'
import ProductItem from '../components/ProductItem';
import Search from '../components/Search';



const ItemListCategories = ({ navigation, route }) => {
    const { category } = route.params
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState('')
    useEffect(() => {
        const productsFiltered = allProducts.filter(product => product.category === category)
        setProducts(productsFiltered)
    }, [category])

    return (
        <View style={styles.container}>
            <Search setKeyword={setKeyword} />
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductItem item={item} navigation={navigation} route={route} />}
            />
        </View>
    )
}
export default ItemListCategories

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }
})

