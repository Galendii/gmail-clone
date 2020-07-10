import React from "react";

import {
  Container,
  LeftContent,
  MenuIcon,
  LogoHolder,
  GmailIcon,
  CenterContent,
  SearchIcon,
  SearchInput,
  CloseIcon,
  ListIcon,
  RightContent,
  HelpIcon,
  ConfigIcon,
  SquareIcon,
  Avatar,
} from "./styles";

export default function TopBar() {
  return (
    <Container>
      <LeftContent>
        <MenuIcon />
        <LogoHolder>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png"
            alt="gmail logo"
          />
        </LogoHolder>
      </LeftContent>
      <CenterContent>
        <SearchIcon />
        <SearchInput />
        <CloseIcon />
        <ListIcon />
      </CenterContent>
      <RightContent>
        <HelpIcon />
        <ConfigIcon />
        <SquareIcon />
        <Avatar />
      </RightContent>
    </Container>
  );
}
