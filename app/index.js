import React, { Component } from "react";
import { View, Text } from "react-native";
import { Client, Message } from "react-native-paho-mqtt";
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

// Set up MQTT
const myStorage = {
  setItem: (key, item) => {
    myStorage[key] = item;
  },
  getItem: key => myStorage[key],
  removeItem: key => {
    delete myStorage[key];
  }
};

const client = new Client({
  uri: "ws://192.168.1.217:1884/ws",
  clientId: "clientId",
  storage: myStorage
});

export default class App extends Component {
  render() {
    return <Kitchen mqttClient={client} />;
  }
}
