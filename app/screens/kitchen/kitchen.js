import React, { Component } from "react";
import { Container, Content, Body, Text, Thumbnail } from "native-base";
import { Client, Message } from "react-native-paho-mqtt";
import { View, TouchableOpacity, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import Footer from "../../components/footer";
import Header from "../../components/header";

const gridWidth = width / 2 - 15;

export default class Kitchen extends Component {
  constructor() {
    super();

    this.state = {
      light: "no"
    };
  }

  componentDidMount() {
    // set event handlers
    this.props.mqttClient.on("connectionLost", responseObject => {
      console.log(responseObject);
      if (responseObject.errorCode !== 0) {
        console.log(responseObject.errorMessage);
      }
    });
    this.props.mqttClient.on("messageReceived", message => {
      console.log(message.payloadString);
      this.setState({ light: message.payloadString });
    });
    // connect the mqttClient
    this.props.mqttClient
      .connect()
      .then(() => {
        // Once a connection has been made, make a subscription and send a message.
        console.log("onConnect");
        return this.props.mqttClient.subscribe("World");
      })
      .then(() => {
        const message = new Message("Hello");
        message.destinationName = "World";
        this.props.mqttClient.send(message);
      })
      .catch(responseObject => {
        console.log(responseObject);
        if (responseObject.errorCode !== 0) {
          console.log("onConnectionLost:" + responseObject.errorMessage);
        }
      });
  }
  render() {
    let bulbIcon = "";
    if (this.state.light === "yes") {
      bulbIcon = require("../../images/light-bulb.png");
    } else {
      bulbIcon = require("../../images/light-bulb-off.png");
    }
    console.log(this.props.mqttClient);
    return (
      <Container>
        <Header />
        <Content padder>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            <TouchableOpacity
              style={{
                width: gridWidth,
                height: 120,
                marginBottom: 9,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#c49ae9"
              }}
              onPress={() => {
                let lightState = "";
                console.log("Setting the ligths");
                if (this.state.light === "yes") {
                  lightState = "no";
                } else {
                  lightState = "yes";
                }
                console.log("lightState", lightState);
                const message = new Message(lightState);

                message.destinationName = "World";
                this.props.mqttClient.send(message);
                this.setState({ light: lightState });
              }}
            >
              <Thumbnail square source={bulbIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: gridWidth,
                height: 120,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#c49ae9"
              }}
              onPress={() => console.log("Setting the ligths")}
            >
              <Thumbnail square source={require("../../images/oven.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: gridWidth,
                height: 120,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#c49ae9"
              }}
              onPress={() => console.log("Setting the ligths")}
            >
              <Thumbnail square source={require("../../images/oven.png")} />
            </TouchableOpacity>
          </View>
        </Content>
        <Footer />
      </Container>
    );
  }
}
