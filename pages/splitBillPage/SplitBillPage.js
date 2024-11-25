import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Picker } from "react-native";
import { Button } from "react-native-paper";
import Slider from "@react-native-community/slider";
import useSplitBillViewModel from "../../viewModels/useSplitBillViewModel";
import styles from "./SplitBillPage.styles";

const SplitBillPage = ({ route, navigation }) => {
  const { amount } = route.params;
  const {
    numPeople,
    tipPercentage,
    customTip,
    tipAmount,
    totalPerPerson,
    setNumPeople,
    handleTipInputChange,
    handleSliderChange,
  } = useSplitBillViewModel(amount);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Number of People</Text>
      <Picker
        selectedValue={numPeople}
        onValueChange={(value) => setNumPeople(value)}
        style={styles.picker}
      >
        {[...Array(10).keys()].map((i) => (
          <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
        ))}
      </Picker>

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

      <Text style={styles.label}>Tip Amount</Text>
      <Text style={styles.result}>${tipAmount}</Text>

      <Text style={styles.label}>Total Per Person</Text>
      <Text style={styles.result}>${totalPerPerson}</Text>

      <Button mode="outlined" onPress={() => navigation.goBack()}>
        Back
      </Button>
    </View>
  );
};

export default SplitBillPage;
