import styled from "styled-components";

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  border-radius: 50%;
  padding: 8px;
  position: relative;
  cursor: pointer;
  &:hover {
    background: var(--outlined-hover);
  }
  transition: all ease-in-out 100ms;
`;

export default IconButton;
