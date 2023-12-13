import { StyleSheet, Text, View, Image} from "react-native";
import { colors } from "../Global/colors";

const ProductItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.images}
            resizeMode="cover"
            source={{uri: item.thumbnail}}
            />
            <Text style={styles.text}>
                {item.title}
            </Text>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width:"80%",
        backgroundColor:colors.alphabetBlue,
        marginHorizontal: "10%",
        marginVertical: 10,
        paddingHorizontal:10,
        paddingVertical:18,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center', 
        justifyContent: 'start',
        gap:30
    },
    images:{
        width:50,
        height:50
    }
})