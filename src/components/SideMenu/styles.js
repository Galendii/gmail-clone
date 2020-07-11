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
  MdKeyboard,
} from "react-icons/md";
import {
  BsClockFill,
  BsChatQuoteFill,
  BsTagFill,
  BsCameraVideoFill,
} from "react-icons/bs";
import {
  IoMdDocument,
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdAlert,
  IoMdTrash,
  IoMdArrowDropright,
  IoMdChatbubbles,
  IoMdArrowDropdown,
} from "react-icons/io";
import { FaCog } from "react-icons/fa";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--primary);
  width: 18%;
`;

export const MailActions = styled.div`
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const WriteMail = styled.div`
  margin: 12px 0;
  height: 7%;
  padding-left: 12px;
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
  height: 40%;
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
    position: relative;
    cursor: pointer;
    > span {
      padding-left: 6px;
      font-size: 14px;
    }
    > span + span {
      position: absolute;
      right: 13px;
    }

    &:hover:not(.active) {
      border-top-right-radius: 24px;
      border-bottom-right-radius: 24px;
      background: var(--outlined-hover);
    }
  }
  li:nth-child(8) {
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

export const MeetBoxes = styled.div`
  border-top: 1px solid var(--outlined);
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
  box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
  > span {
    padding-left: 12px;
    font-size: 14px;
  }
  > ul {
    list-style: none;
    padding-left: 0;
    li {
      display: flex;
      align-items: center;
      padding: 5px 0 5px 12px;
      cursor: pointer;
      > span {
        font-size: 14px;
        padding-left: 6px;
      }
      &:hover {
        border-top-right-radius: 24px;
        border-bottom-right-radius: 24px;
        background: var(--outlined-hover);
      }
    }
  }
`;

export const ChatBox = styled.div`
  padding-top: 10px;
`;
export const MainChat = styled.div`
  margin: 0 12px 5px 12px;
  border-bottom: 1px solid var(--outlined);
  > span {
    font-size: 14px;
  }
  > ul {
    list-style: none;
    padding-left: 0;
    li {
      display: flex;
      align-items: center;
      padding: 5px 0 5px 0px;
      position: relative;
      > span {
        font-size: 12px;
      }
      > svg {
        padding: 0;
      }
      > svg + svg {
        position: absolute;
        right: 13px;
      }
    }
  }
`;
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 32px;
  width: 32px;
  background: #a0c3ff;
  border-radius: 50%;
  margin-right: 10px;
  > svg {
    fill: #4274e0;
    /* position: absolute;
    top: 1px;
    right: 1px;
    left: 1px;
    bottom: 1px; */
    width: 100%;
    height: 100%;
  }
`;
export const StatusCircle = styled.div`
  background: var(--green);
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

export const RecentChats = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  > span {
    color: var(--gray);
    margin-bottom: 3px;
  }
  > span + span {
    color: var(--blue);
  }
  border-bottom: 1px solid var(--outlined);
`;

// Icons

const iconCss = css`
  width: 20px;
  height: 20px;
  fill: var(--gray);
`;

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
export const ArrowIcon = styled(IoMdArrowDropdown)`
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
export const VideoIcon = styled(BsCameraVideoFill)`
  ${iconCss}
`;
export const KeyboardIcon = styled(MdKeyboard)`
  ${iconCss}
`;
