import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductItem from '../components/ProductItem';
import Search from '../components/Search';
import { useSelector } from 'react-redux';


const ItemListCategories = ({ navigation, route }) => {
    const productsFilteredByCategory = useSelector(state => state.shop.value.productsFilteredByCategory)
    const { category } = route.params
    const [products, setProducts] = useState(productsFilteredByCategory)
    const [keyword, setKeyword] = useState('')
    useEffect(() => {
        const productsFiltered = productsFilteredByCategory.filter(product => product.category === category)
        setProducts(productsFilteredByCategory)
    }, [keyword, productsFilteredByCategory])

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

