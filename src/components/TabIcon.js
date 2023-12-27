import { StyleSheet, Text, SafeAreaView } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import { colors } from '../Global/colors'

const TabIcon = ({icon, label, focused}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Entypo name={icon} size={40} color={focused ? colors.peptalk : colors.bleachedSilk }/>
      <Text style={{...styles.text, ...{color: focused ? colors.peptalk : colors.bleachedSilk }}} >{label}</Text>
    </SafeAreaView>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        gap: 3
    },
    text:{
        color:"white",
        textAlign:"center"
    }
})