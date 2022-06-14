import { SafeAreaView, TextInput, StyleSheet, Text, View } from "react-native";
import React from "react";

function App() {

  return (
    <NeedText>Send</NeedText>
  )
};

const NeedText = () => {
  const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="useless placeholder"
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems:'bottom'
  },
});
export default NeedText;