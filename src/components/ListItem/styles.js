import styled, { css } from "styled-components";
import {
  IoMdTrash,
  IoMdArchive,
  IoMdMailOpen,
  IoMdStarOutline,
} from "react-icons/io";
import { BsClockFill } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--outlined);
  width: 100%;
  cursor: pointer;
  &:hover {
    > div:nth-child(2) {
      width: 59%;
    }
    > div:last-child {
      width: 16%;
      > div:last-child {
        display: inline;
        > svg {
          padding: 0 10px;
        }
      }
      > span {
        display: none;
      }
    }
    svg {
      &:hover {
        fill: var(--black);
      }
    }
    box-shadow: inset 1px 0 0 #dadce0, 0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  height: 100%;
  > span {
    font-size: 14px;
  }
  padding-right: 32px;
`;
export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  margin: 0 12px;
`;
export const MiddleContent = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 60%;
  height: 100%;
  span {
    font-size: 14px;
  }
  > strong {
    color: var(--gray);
  }
  > span > span {
    color: var(--gray);
  }
`;
export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 15%;
  height: 20px;
  padding-right: 10px;
  > span {
    font-size: 14px;
  }
`;
export const IconHolder = styled.div`
  display: none;
`;

//   Icons

const iconCss = css`
  width: 20px;
  height: 20px;
  fill: var(--gray);
  padding: 0;
`;

export const StarIcon = styled(IoMdStarOutline)`
  ${iconCss}
  margin-right: 10px;
`;
export const DownloadIcon = styled(IoMdArchive)`
  ${iconCss}
`;
export const TrashIcon = styled(IoMdTrash)`
  ${iconCss}
`;
export const OpenMailIcon = styled(IoMdMailOpen)`
  ${iconCss}
`;
export const ClockIcon = styled(BsClockFill)`
  ${iconCss}
`;
