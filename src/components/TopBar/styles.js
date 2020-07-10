import styled, { css } from "styled-components";

import { AiTwotoneMail } from "react-icons/ai";
import {
  MdSearch,
  MdMenu,
  MdClose,
  MdKeyboardArrowDown,
  MdApps,
  MdHelpOutline,
} from "react-icons/md";

import { FaCog } from "react-icons/fa";
import IconButton from "../IconButton";

export const Container = styled.div`
  display: flex;
  padding: 8px;
  width: 100%;
  height: 64px;
  justify-content: space-between;
  background: var(--primary);
  border-bottom: 1px solid var(--outlined);
`;

export const LeftContent = styled.div`
  display: flex;
  width: 16%;
  align-items: center;
  button {
    margin-right: 5px;
  }
  @media (min-width: 500px) {
    padding-right: 30px;
  }
`;
export const LogoHolder = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: inline;
  }
`;
export const CenterContent = styled.div`
  display: flex;
  width: 67%;
  padding-right: 25px;
  @media (min-width: 500px) {
    padding: 0px 30px 0px 10px;
  }
  align-items: center;
`;

export const InputHolder = styled.div`
  width: min(100%, 722px);
  min-width: 250px;
  height: 48px;
  background: var(--outlined);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:focus-within {
    box-shadow: 0 1px 1px 0 rgba(65, 69, 73, 0.3),
      0 1px 3px 1px rgba(65, 69, 73, 0.15);
    background: var(--white);
    .close {
      opacity: 1;
    }
    button {
      background: var(--primary);
      &:hover {
        background: var(--outlined-hover);
      }
    }
  }
`;

export const SearchButton = styled(IconButton)`
  margin: 0 10px;
`;
export const InputItem = styled.div`
  display: flex;
  align-items: center;
  width: 13%;
  justify-content: space-around;
`;
export const CloseButton = styled(IconButton)`
  opacity: 0;
  transition: all ease-in-out 130ms;
`;
export const ListButton = styled(IconButton)`
  display: none;
  @media (min-width: 500px) {
    display: inline;
  }
`;

export const SearchInput = styled.input`
  border: none;
  margin: 5px 15px;
  height: 100%;
  width: 100%;
  background: transparent;
  font-size: 16px;
  color: var(--black);
  outline: 0;
`;
export const RightContent = styled.div`
  display: flex;
  width: 16%;
  @media (min-width: 500px) {
    padding-right: 30px;
  }
  align-items: center;
  justify-content: space-between;
`;

export const HelpButton = styled(IconButton)`
  display: none;
  @media (min-width: 1024px) {
    display: inline;
  }
`;
export const ConfigButton = styled(IconButton)`
  display: none;
  @media (min-width: 500px) {
    display: inline;
  }
`;
export const SquareButton = styled(IconButton)`
  display: none;
  @media (min-width: 1024px) {
    display: inline;
  }
`;
export const Avatar = styled.div`
  background: #8d6e63;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  bottom: 3px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  > span {
    color: var(--primary);
    font-size: 19px;
  }
`;

const iconCss = css`
  fill: var(--gray);
  border-radius: 50%;
  background: transparent;
  width: 24px;
  height: 24px;
`;

// Icons

export const MenuIcon = styled(MdMenu)`
  ${iconCss}
`;

export const SearchIcon = styled(MdSearch)`
  ${iconCss}
`;
export const CloseIcon = styled(MdClose)`
  ${iconCss}
`;
export const ListIcon = styled(MdKeyboardArrowDown)`
  ${iconCss}
`;
export const HelpIcon = styled(MdHelpOutline)`
  ${iconCss}
`;
export const ConfigIcon = styled(FaCog)`
  ${iconCss}
`;
export const SquareIcon = styled(MdApps)`
  ${iconCss}
`;
