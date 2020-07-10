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
  padding-right: 30px;
  align-items: center;

  svg {
    margin: 12px;
  }
`;
export const LogoHolder = styled.div``;
export const CenterContent = styled.div`
  display: flex;
  width: 16%;
  padding-right: 30px;
  align-items: center;
`;
export const SearchInput = styled.div``;
export const RightContent = styled.div`
  display: flex;
  width: 16%;
  padding-right: 30px;
  align-items: center;
`;
export const Avatar = styled.div``;

const iconCss = css`
  fill: var(--gray);
  border-radius: 50%;
  background: transparent;
  &:hover {
    background: var(--outline);
  }
`;

export const MenuIcon = styled(MdMenu)`
  ${iconCss}

  width: 24px;
  height: 24px;
`;

export const SearchIcon = styled(MdSearch)`
  ${iconCss}
  width: 40px;
  height: 40px;
`;
export const CloseIcon = styled(MdClose)`
  ${iconCss}
  width: 40px;
  height: 40px;
`;
export const ListIcon = styled(MdKeyboardArrowDown)`
  ${iconCss}
  width: 40px;
  height: 40px;
`;
export const HelpIcon = styled(MdHelpOutline)`
  ${iconCss}
  width: 24px;
  height: 24px;
`;
export const ConfigIcon = styled(FaCog)`
  ${iconCss}
  width: 24px;
  height: 24px;
`;
export const SquareIcon = styled(MdApps)`
  ${iconCss}
  width: 24px;
  height: 24px;
`;
