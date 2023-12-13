import { StyleSheet, Text, View } from "react-native"
import { colors } from "../Global/colors";

const Header = ({title = "Producto"}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
               {title}
            </Text>
        </View>
    )
}

export default Header;


const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.peptalk,
        width:"100%",
        height:"12%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        marginTop:20,
        fontSize:20,
        fontFamily: 'PlayfairDisplay',
        color:colors.bleachedSilk
    }
})