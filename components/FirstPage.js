import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-paper";

const FirstPage = ({ navigation }) => {
  const [amount, setAmount] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Total Amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate("SecondPage", { amount: parseFloat(amount) })
        }
        disabled={!amount}
      >
        Continue
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 16,
    width: "80%",
    borderRadius: 4,
  },
});

export default FirstPage;
