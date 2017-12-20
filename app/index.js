import React from "react";
import { View, Text } from "react-native";
import EStylesheet from "react-native-extended-stylesheet";
import Kitchen from "./screens/kitchen/kitchen";

EStylesheet.build({
  $pink: "#c49ae9",
  $beige: "#ffd0a1",
  $blue: "#7ee1e6",
  $darkGrey: "#51565f",
  $grey: "#aab1ba",
  $cream: "#f2edda"
});

export default App => <Kitchen />;
