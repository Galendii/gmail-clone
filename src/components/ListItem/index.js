import React from "react";
import {
  Container,
  LeftContent,
  Checkbox,
  StarIcon,
  MiddleContent,
  RightContent,
  IconHolder,
  DownloadIcon,
  TrashIcon,
  OpenMailIcon,
  ClockIcon,
} from "./styles";

export default function ListItem() {
  return (
    <Container>
      <LeftContent>
        <Checkbox type="checkbox" />
        <StarIcon />
        <span>
          <strong>Mind Consulting</strong>
        </span>
      </LeftContent>
      <MiddleContent>
        <span>
          <strong>We Make IT Happen</strong>
          <span>
            {" "}
            - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.{" "}
          </span>
        </span>
      </MiddleContent>
      <RightContent>
        <span>10 de jul.</span>
        <IconHolder>
          <DownloadIcon />
          <TrashIcon />
          <OpenMailIcon />
          <ClockIcon />
        </IconHolder>
      </RightContent>
    </Container>
  );
}
