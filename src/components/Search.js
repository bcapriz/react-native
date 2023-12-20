import { StyleSheet, Text, TextInput, Pressable, SafeAreaView } from "react-native";
import { colors } from "../Global/colors";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";



const Search = ({ setKeyword }) => {

    const [input, setInput] = useState("")
    const [error, setError] = useState("")
    const searchFor = () => {
        const expression = /.*[0-9].*/
        if (expression.test(input)) {
            setError('No debe contener numeros')
        } else {
            setKeyword(input)
        }

    }
    const removeItem = () => {
        setInput('')
        setError('')
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <TextInput placeholder="Search" style={styles.input} value={input} onChangeText={(e) => setInput(e)} />
                <Pressable onPress={searchFor}>
                    <EvilIcons name="search" color={colors.peptalk} size={30} />
                </Pressable>
                <Pressable onPress={removeItem}>
                    <AntDesign name="closecircle" color={colors.peptalk} size={19} />
                </Pressable>
            </SafeAreaView >
            {error ? <Text style={styles.errorInput}>{error}</Text> : null}
        </>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        marginTop: "2.5%",
        paddingHorizontal: 5,
        marginHorizontal: '6%'
    },
    input: {
        color: "#212121",
        backgroundColor: colors.alphabetBlue,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.peptalk,
        width: "80%",
        fontSize: 20
    },
    errorInput: {
        color: 'red',
    }
})