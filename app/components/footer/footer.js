import React, { Component } from "react";
import { Footer, FooterTab, Button, Thumbnail } from "native-base";

export default () => (
  <Footer style={{ height: 70, borderTopWidth: 0, backgroundColor: "white" }}>
    <FooterTab>
      <Button full
        onPress={() => console.log('Time for a unicorn party!')}
      >
        <Thumbnail square source={require("../../images/unicorn.png")} />
      </Button>
    </FooterTab>
  </Footer>
);
