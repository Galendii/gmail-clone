import styled, { css } from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 99%;
  height: 40px;
  padding: 5px 10px 5px 10px;
  border-bottom: 1px solid var(--outlined);
  justify-content: space-between;
`;

export const LeftContent = styled.div`
  width: 50%;
  justify-self: flex-start;
  input[type="checkbox"] {
    background: var(--black);
    color: var(--primary);
  }
`;
export const Checkbox = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;
export const RightContent = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  padding-right: 8px;
  > span {
    font-size: 12px;
    padding: 0 15px;
  }
`;
const iconCss = css`
  width: 20px;
  height: 20px;
  fill: var(--gray);
  cursor: pointer;
  &:hover {
    fill: var(--black);
  }
`;

export const ArrowIcon = styled(IoMdArrowDropdown)`
  ${iconCss}
`;
export const ReloadIcon = styled(AiOutlineReload)`
  ${iconCss}
  margin-left:17px;
  margin-right: 4px;
`;
export const DotsIcon = styled(BsThreeDotsVertical)`
  ${iconCss}
  margin-left: 4px;
`;
export const LeftArowIcon = styled(MdKeyboardArrowLeft)`
  ${iconCss}
  margin-left: 8px;
  margin-right: 4px;
`;
export const RightArrowIcon = styled(MdKeyboardArrowRight)`
  ${iconCss}
  margin-left:4px;
  margin-right: 8px;
`;
