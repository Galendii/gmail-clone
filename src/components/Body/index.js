import React from "react";
import { Container, MailWrapper } from "./styles";
import SideMenu from "../SideMenu";
import MailBar from "../MailBar";
import MailList from "../MailList";

export default function Body() {
  return (
    <Container>
      <SideMenu />
      <MailWrapper>
        <MailBar />
        <MailList />
      </MailWrapper>
    </Container>
  );
}
