import React from "react";
import { Container } from "./styles";
import TopListBar from "../TopListBar";
import List from "../List";

export default function MailList() {
  return (
    <Container>
      <TopListBar />
      <List />
    </Container>
  );
}
