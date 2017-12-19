import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Thumbnail
} from "native-base";

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
        <Footer
          style={{ height: 70, borderTopWidth: 0, backgroundColor: "white" }}
        >
          <FooterTab>
            <Button full>
              <Thumbnail square source={require("../../images/unicorn.png")} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
