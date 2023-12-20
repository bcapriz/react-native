import { Pressable, StyleSheet, View, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../Global/colors";


const ButtonBackProduct = ({ setProductDetailId }) => {

    return (
        <View style={styles.container}>
            <Pressable style={styles.buttonBack} title="Go Back" onPress={() => setProductDetailId(0)}>
                <Ionicons name="ios-return-down-back" size={28} color={colors.peptalk} />
            </Pressable>
        </View>
    )
}

export default ButtonBackProduct;

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    buttonBack: {
        width: "100%",
        paddingHorizontal: 35,
        marginTop: 7,
    },
})