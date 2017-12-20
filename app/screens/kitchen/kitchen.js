import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import Footer from "../../components/footer";

export default class Kitchen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Rowans Kitchen</Title>
          </Body>
        </Header>
        <Content />
        <Footer />
      </Container>
    );
  }
}
