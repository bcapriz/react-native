import { Pressable, StyleSheet, View, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../Global/colors";


const ButtonBack = ({ setCategorySelected }) => {

    return (
        <View style={styles.container}>
            <Pressable style={styles.buttonBack} title="Go Back" onPress={() => setCategorySelected('')}>
                <Ionicons name="ios-return-down-back" size={28} color={colors.peptalk} />
            </Pressable>
        </View>
    )
}

export default ButtonBack;

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