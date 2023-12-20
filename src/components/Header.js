import { StyleSheet, Text, SafeAreaView, useWindowDimensions } from "react-native"
import { colors } from "../Global/colors";
import { useEffect, useState } from "react";

const Header = ({ title }) => {
    const { width, height } = useWindowDimensions()
    const [lanscape, setLanscape] = useState(false)

    useEffect(() => {
        if (width > height) {
            setLanscape(true)
        } else {
            setLanscape(false)
        }
    }, [width, height])


    return (
        <SafeAreaView style={lanscape ? styles.lanscapeContainer : styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </SafeAreaView>
    )
}

export default Header;


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.peptalk,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    lanscapeContainer: {
        backgroundColor: colors.peptalk,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontFamily: 'PlayfairDisplay',
        marginBottom: 10,
        color:colors.bleachedSilk
    }
})