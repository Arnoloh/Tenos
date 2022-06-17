import { Button, SafeAreaView, Alert, TextInput, Text, StyleSheet, View } from "react-native";
import React, { Component } from 'react';

function App() {

  return (
    <SafeAreaView>
      <div>
        <View style={styles.styleButton}>
          <NeedText></NeedText>
        </View>
      </div>
    </SafeAreaView>
  )

};

class NeedText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    };
  };
  message() {
    const { message } = this.state.message;
  }
  render() {
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ message: text })}
          value={this.state.message}
          placeholder="Write your message here !"
        />
        <Button
          color={"#047AFF"}
          title="Send message"
          onPress={() => console.log(this.state.message)}
        />
      </SafeAreaView >
    )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  bot: {
    position: "absolute",
    width: "50%",
    bottom: "10px",
    border: "3px solid #8AC007"

  }

});


export default App;