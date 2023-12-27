import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/colors";
import CardShadow from "../Wrappers/cardShadow";
import { useDispatch } from "react-redux";
import { setProductsFilteredByCategory } from "../features/shop/shopSlice";

const CategoryItem = ({ category, navigation, route }) => {

    const dispatch = useDispatch()

    return (
        <Pressable onPress={() => {
            dispatch(setProductsFilteredByCategory(category))
            navigation.navigate("Category", { category })
        }}
        >
            <CardShadow style={styles.container}>
                <Text style={styles.text}>{category}</Text>
            </CardShadow>
        </Pressable>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.peptalk,
        margin: 10,
        padding: 10,
        width: "80%",
        marginHorizontal: "10%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7
    },
    text: {
        color: colors.bleachedSilk,
        fontSize: 18
    }

})

