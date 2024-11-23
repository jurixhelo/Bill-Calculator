import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-paper";
import Slider from "@react-native-community/slider";

const SecondPage = ({ route, navigation }) => {
  const { amount } = route.params;
  const [numPeople, setNumPeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [customTip, setCustomTip] = useState("0");

  // Calculate tip and total per person
  const tipAmount = (amount || 0) * (tipPercentage / 100);
  const totalPerPerson = ((amount || 0) + tipAmount) / numPeople;

  // Sync slider and text input for the tip percentage
  const handleTipInputChange = (text) => {
    const tip = parseFloat(text) || 0;
    setCustomTip(text);
    setTipPercentage(tip);
  };

  const handleSliderChange = (value) => {
    setTipPercentage(value);
    setCustomTip(value.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Number of People</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numPeople.toString()}
        onChangeText={(text) => setNumPeople(parseInt(text) || 1)}
      />
      <Text style={styles.label}>Tip Percentage</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={tipPercentage}
        onValueChange={handleSliderChange}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={customTip}
        onChangeText={handleTipInputChange}
      />
      <Text style={styles.label}>Total Per Person</Text>
      <Text style={styles.result}>${totalPerPerson.toFixed(2)}</Text>
      <Button mode="outlined" onPress={() => navigation.goBack()}>
        Back
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
  slider: {
    width: "80%",
    height: 40,
    marginVertical: 16,
  },
  result: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
});

export default SecondPage;
