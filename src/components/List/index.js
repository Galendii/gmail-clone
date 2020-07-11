import React from "react";
import { Container } from "./styles";
import ListItem from "../ListItem";

export default function List() {
  const listGenerator = () => {
    for (let i = 0; i < 40; i++) {
      return <ListItem />;
    }
  };

  return (
    <Container>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Container>
  );
}
