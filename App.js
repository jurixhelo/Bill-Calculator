import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./pages/homeScreen/HomePage";
import SplitBillPage from "./pages/splitBillPage/SplitBillPage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SplitBillPage" component={SplitBillPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
