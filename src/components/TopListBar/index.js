import React from "react";
import {
  Container,
  ListItem,
  InboxIcon,
  GroupIcon,
  PurchaseIcon,
} from "./styles";

export default function TopListBar() {
  return (
    <Container>
      <ListItem className="active">
        <InboxIcon />
        <div>
          <span>Principal</span>
        </div>
      </ListItem>
      <ListItem>
        <GroupIcon />
        <div>
          <span>
            Social <span className="social">1 novo</span>
          </span>
          <span>LinkedIn</span>
        </div>
      </ListItem>
      <ListItem>
        <PurchaseIcon />
        <div>
          <span>
            Promoçoes <span className="promo">50 novos</span>
          </span>
          <span>Udemy Instructor. Pilar Sa</span>
        </div>
      </ListItem>
    </Container>
  );
}
