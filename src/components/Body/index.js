import React from "react";
import { Container } from "./styles";
import SideMenu from "../SideMenu";

export default function Body() {
  return (
    <Container>
      <SideMenu />
      {/*<MailWrapper>
        <MailBar />
        <MailBox /> 
      </MailWrapper>*/}
    </Container>
  );
}
