import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import allCart from '../Data/cart.json'
import CartItem from "../components/CartItem";
import { colors } from "../Global/colors";


const Cart = () => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setCart(allCart)
    }, [])

    useEffect(() => {
        const total = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0)
        setTotal(total)
    }, [cart])


    return (
        <View style={styles.container}>
           
            <FlatList
                data={allCart}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CartItem item={item} />}
            />
            <View style={styles.confirmContainer}>
                <Pressable >
                    <Text style={styles.text1}>Confirmar</Text>
                </Pressable>
                <Text style={styles.text2}>Total: $ {total}</Text>
            </View>
        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:125
    },
    confirmContainer:{
        backgroundColor:colors.peptalk, 
        padding:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text1:{
        color:colors.bleachedSilk,
        fontSize:15
    },
    text2:{
        color:colors.bleachedSilk,
        fontStyle:'italic',
        fontSize:15
    }
})