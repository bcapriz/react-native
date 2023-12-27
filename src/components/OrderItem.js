import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../Global/colors';

const OrderItem = ({ order }) => {

    const total = order.items.reduce((acc,product)=> acc + (product.price * product.quantity), 0)

    return (
        <View style={styles.container}> 
            <View  style={styles.textContainer}>
                <Text  style={styles.text1}>{new Date(order.createdAt).toLocaleString()}</Text>
                <Text style={styles.text2}>Total: $ {total}</Text>
            </View>
            <AntDesign name="search1" size={24} color={colors.bleachedSilk} />
        </View>

    )

}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.peptalk, 
        margin:15,
        padding:10,
        height:90,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:15,
        borderWidth:2,
        borderColor: colors.alphabetBlue
    },
    textContainer:{
        gap:7,
        width:"70%"
    },
    text1:{
        fontSize: 18,
        fontWeight:'500',
        color: colors.alphabetBlue
    },
    text2:{
        fontSize: 15,
        fontStyle:"italic",
        color: colors.alphabetBlue
    }
})