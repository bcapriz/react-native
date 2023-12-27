import { StyleSheet, Text, View, Button, TextInput } from "react-native"
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount} from "../features/counter/counterSlice";


const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  const [amount,setAmount] = useState(0)

 
  return (
    <View style={styles.container}>
      <Button title='Increment' onPress={() => dispatch(increment())} />
      <Text>{count}</Text>
      <Button title='Decrement' onPress={() => dispatch(decrement())} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={(t) => setAmount(parseInt(t))} />
        <Button title='Add' onPress={() => dispatch(incrementByAmount(amount))} />
      </View>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    alignItems: 'center'
  },
  inputContainer: {
    gap: 10,
    flexDirection: 'row'
  },
  input: {
    borderWidth: 2
  }
})