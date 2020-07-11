import React from "react";
import {
  Container,
  LeftContent,
  Checkbox,
  ArrowIcon,
  DotsIcon,
  RightContent,
  LeftArowIcon,
  RightArrowIcon,
  ReloadIcon,
} from "./styles";

export default function MailBar() {
  return (
    <Container>
      <LeftContent>
        <Checkbox type="checkbox" />
        <ArrowIcon />
        <ReloadIcon />
        <DotsIcon />
      </LeftContent>
      <RightContent>
        <span>1-5 de 800</span>
        <LeftArowIcon />
        <RightArrowIcon />
      </RightContent>
    </Container>
  );
}
