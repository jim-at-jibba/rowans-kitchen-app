import React, { Component } from "react";
import { Container, Content, Body, Text } from "native-base";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default class Kitchen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    );
  }
}
