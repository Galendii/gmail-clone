import React from "react";

import {
  Container,
  LeftContent,
  MenuIcon,
  LogoHolder,
  CenterContent,
  SearchIcon,
  SearchInput,
  CloseIcon,
  ListIcon,
  RightContent,
  HelpIcon,
  ConfigIcon,
  SquareIcon,
  InputHolder,
  Avatar,
  SearchButton,
  InputItem,
  CloseButton,
  ListButton,
  SquareButton,
  ConfigButton,
  HelpButton,
} from "./styles";
import IconButton from "../IconButton";

export default function TopBar() {
  return (
    <Container>
      <LeftContent>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <LogoHolder>
          <picture>
            <source
              media="(min-width: 500px) and (max-width: 1024px)"
              srcSet="https://ssl.gstatic.com/gb/images/p1_487702a4.png"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png"
            />
            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png"
              alt="gmail logo"
            />
          </picture>
        </LogoHolder>
      </LeftContent>
      <CenterContent>
        <InputHolder>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
          <SearchInput placeholder="Pesquisar e-mail" />
          <InputItem>
            <CloseButton className="close">
              <CloseIcon />
            </CloseButton>
            <ListButton>
              <ListIcon />
            </ListButton>
          </InputItem>
        </InputHolder>
      </CenterContent>
      <RightContent>
        <HelpButton>
          <HelpIcon />
        </HelpButton>
        <ConfigButton>
          <ConfigIcon />
        </ConfigButton>
        <SquareButton>
          <SquareIcon />
        </SquareButton>
        <IconButton>
          <Avatar>
            <span>b</span>
          </Avatar>
        </IconButton>
      </RightContent>
    </Container>
  );
}
