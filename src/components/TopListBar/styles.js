import styled, { css } from "styled-components";
import { MdInbox, MdGroup } from "react-icons/md";
import { BsTagFill } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 12px;
  width: 100%;
  height: 50px;
`;
export const ListItem = styled.div`
  width: 17%;
  height: 100%;
  padding: 5px 24px 5px 8px;
  display: flex;
  align-items: center;
  > svg {
    padding-right: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    > span {
      font-weight: 500;
      font-size: 14px;
      color: var(--gray);
      > span {
        padding: 3px;
        color: var(--primary);
        font-size: 0.75rem;
        letter-spacing: 0.3px;
        font-weight: 500;
        height: 16px;
        line-height: 16px;
        margin-left: 8px;
        padding: 0 4px 0 4px;
      }
      > span.social {
        background: var(--blue);
      }
      > span.promo {
        background: var(--green);
      }
    }
    > span + span {
      font-size: 12px;
    }
  }
  &.active {
    span {
      color: var(--red);
    }
    svg {
      fill: var(--red);
    }
    border-bottom: 2px solid var(--red);
  }
  &:hover:not(.active) {
    > div {
      > span:first-child {
        color: var(--black);
      }
    }

    svg {
      fill: var(--black);
    }
  }
  &:hover {
    background: var(--outlined-hover);
  }
`;

const iconCss = css`
  width: 20px;
  height: 20px;
  fill: var(--gray);
`;

export const InboxIcon = styled(MdInbox)`
  ${iconCss}
`;
export const GroupIcon = styled(MdGroup)`
  ${iconCss}
`;
export const PurchaseIcon = styled(BsTagFill)`
  ${iconCss}
`;
