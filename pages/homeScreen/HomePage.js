import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-paper";
import styles from "./HomePage.styles";

const HomePage = ({ navigation }) => {
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
          navigation.navigate("SplitBillPage", { amount: parseFloat(amount) })
        }
        disabled={!amount}
      >
        Continue
      </Button>
    </View>
  );
};

export default HomePage;
