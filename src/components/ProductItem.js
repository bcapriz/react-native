import { StyleSheet, Text, View, Image, useWindowDimensions, Pressable } from "react-native";
import { colors } from "../Global/colors";
import CardShadow from "../Wrappers/cardShadow";


const ProductItem = ({ item, navigation, route }) => {
    const { width } = useWindowDimensions()

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate("Product", { id: item.id })}>
            <Text style={width > 350 ? styles.text : styles.textMin}>
                {item.title}
            </Text>
            <Image
                style={styles.images}
                resizeMode="cover"
                source={{ uri: item.thumbnail }}
            />
        </Pressable>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: colors.peptalk,
        marginHorizontal: "10%",
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 18,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 30
    },
    images: {
        minWidth: 80,
        height: 80,
        width: "30%"
    },
    text: {
        fontSize: 18,
        width: "60%",
        textAlign: "center",
        fontFamily:'PlayfairDisplay',
        color:colors.bleachedSilk
    },
    textMin: {
        width: "60%",
        fontSize: 15,
        textAlign: "center"
    }
})

