import React, { Component } from "react";
import { Container, Content, Body, Text, Thumbnail } from "native-base";
import { View, TouchableOpacity, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import Footer from "../../components/footer";
import Header from "../../components/header";

const gridWidth = width / 2 - 15;

export default class Kitchen extends Component {
  constructor() {
    super();

    this.state = {
      light: false
    };
  }
  render() {
    const bulbIcon = this.state.light
      ? require("../../images/light-bulb.png")
      : require("../../images/light-bulb-off.png");
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
              onPress={() => console.log("Setting the ligths")}
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
