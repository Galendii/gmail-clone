import styled, { css } from "styled-components";
import {
  MdInbox,
  MdStar,
  MdLabel,
  MdSend,
  MdEmail,
  MdAdd,
  MdGroup,
  MdInfo,
} from "react-icons/md";
import { BsClockFill, BsChatQuoteFill, BsTagFill } from "react-icons/bs";
import {
  IoMdDocument,
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdAlert,
  IoMdTrash,
  IoMdArrowDropright,
  IoMdChatbubbles,
} from "react-icons/io";
import { FaCog } from "react-icons/fa";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--primary);
  width: 270px;
`;

export const MailActions = styled.div`
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  height: 50%;
`;
export const WriteMail = styled.div`
  margin: 12px 0;
  height: 25%;
`;
export const WriteButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 24px 0 0;

  color: var(--dark-gray);
  font-weight: bold;
  font-size: 0.875rem;

  border: none;
  border-radius: 24px;
  background: var(--primary);

  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  transition: box-shadow 0.08s linear,
    min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  > svg {
    fill: var(--red);
  }
  cursor: pointer;
  &:hover {
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.302),
      0 4px 8px 3px rgba(60, 64, 67, 0.149);
  }
`;
export const MailBoxes = styled.div`
  height: 75%;
  overflow-y: auto;
  overflow-x: hidden;
  ul {
    margin-right: 20px;
    list-style: none;
    padding-left: 0;
    > ul {
      flex-direction: column;
      padding: 0;
      > li {
        display: flex;
        align-items: center;
        padding: 5px 12px 5px 27px;
      }
    }
  }

  li {
    display: flex;
    align-items: center;
    padding: 5px 0 5px 12px;
    width: 100%;
    cursor: pointer;
    > span {
      padding-left: 6px;
      font-size: 14px;
    }
    > span + span {
      padding-left: 16px;
      padding-right: 10px;
    }

    &:hover:not(.active) {
      border-top-right-radius: 24px;
      border-bottom-right-radius: 24px;
      background: var(--outlined-hover);
    }
  }
  li:nth-child(7) {
    padding-left: 0;
    width: 100%;
  }
  li.active {
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    background: var(--red-hover);
    color: var(--red);
    font-weight: bold;
    > svg {
      fill: var(--red);
    }
  }
`;

const iconCss = css`
  width: 20px;
  height: 20px;
  fill: var(--gray);
`;

// Icons

export const MainBoxIcon = styled(MdInbox)`
  ${iconCss}
`;
export const StarIcon = styled(MdStar)`
  ${iconCss}
`;
export const ClockIcon = styled(BsClockFill)`
  ${iconCss}
`;
export const FlagIcon = styled(MdLabel)`
  ${iconCss}
`;
export const SentIcon = styled(MdSend)`
  ${iconCss}
`;
export const SheetIcon = styled(IoMdDocument)`
  ${iconCss}
`;
export const ArrowIcon = styled(IoMdArrowDropright)`
  width: 15px;
  height: 15px;
  padding-bottom: 2.5px;
  fill: var(--gray);
`;
export const CategoryIcon = styled(MdLabel)`
  ${iconCss}
`;
export const GroupIcon = styled(MdGroup)`
  ${iconCss}
`;
export const InfoIcon = styled(MdInfo)`
  ${iconCss}
`;
export const ChatIcon = styled(IoMdChatbubbles)`
  ${iconCss}
`;
export const MarketIcon = styled(BsTagFill)`
  ${iconCss}
`;
export const ArrowDownIcon = styled(IoIosArrowDown)`
  ${iconCss}
`;
export const ArrowUpIcon = styled(IoIosArrowUp)`
  ${iconCss}
`;
export const HangoutsIcon = styled(BsChatQuoteFill)`
  ${iconCss}
`;
export const TimedSendIcon = styled(MdSend)`
  ${iconCss}
`;
export const MailIcon = styled(MdEmail)`
  ${iconCss}
`;
export const WarningIcon = styled(IoMdAlert)`
  ${iconCss}
`;
export const TrashIcon = styled(IoMdTrash)`
  ${iconCss}
`;
export const CogIcon = styled(FaCog)`
  ${iconCss}
`;
export const PlusIcon = styled(MdAdd)`
  ${iconCss}
`;
