import { StyleSheet, Text, View } from "react-native";
import {Entypo} from "@expo/vector-icons"
import { colors } from "../Global/colors";

const CartItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>$ {item.price}</Text>
            </View>
            <Entypo name='trash' size={23} color="black"/>
        </View>
    )
}

export default CartItem;

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.alphabetBlue , 
        margin:15,
        padding:10,
        height:90,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:15,
        borderWidth:2,
        borderColor: colors.peptalk
    },
    textContainer:{
        gap:7,
        width:"70%"
    },
    text1:{
        fontSize: 18,
        fontWeight:'500'
    },
    text2:{
        fontSize: 15,
        fontStyle:"italic"
    }
})