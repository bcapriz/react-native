import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/colors";
import CardShadow from "../Wrappers/cardShadow";

const CategoryItem = ({ category, setCategorySelected }) => {
    return (
        <Pressable onPress={()=> setCategorySelected(category)}>
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
        borderRadius:7
    },
    text:{
        color: colors.bleachedSilk
    }

})