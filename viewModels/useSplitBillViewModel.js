import { useState } from "react";

export default function useSplitBillViewModel(initialAmount = 0) {
  const [numPeople, setNumPeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [customTip, setCustomTip] = useState("0");

  const calculateTip = () => (initialAmount * (tipPercentage / 100)).toFixed(2);
  const calculateTotalPerPerson = () => {
    const tipAmount = parseFloat(calculateTip());
    return ((initialAmount + tipAmount) / numPeople).toFixed(2);
  };

  const handleTipInputChange = (text) => {
    const tip = parseFloat(text) || 0;
    setCustomTip(text);
    setTipPercentage(tip);
  };

  const handleSliderChange = (value) => {
    setTipPercentage(value);
    setCustomTip(value.toString());
  };

  return {
    numPeople,
    tipPercentage,
    customTip,
    tipAmount: calculateTip(),
    totalPerPerson: calculateTotalPerPerson(),
    setNumPeople,
    handleTipInputChange,
    handleSliderChange,
  };
}
