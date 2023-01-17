import styled from "styled-components";

export default styled.button<{span?: number}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 80px;
  width: 100%;
  outline: none;
  border: none;
  background: ${(props) => props.color || props.theme.colors.primary};
  color: white;
  font-size: 20px;
  grid-column-end: span ${(props) => props.span || 1};
  &:hover {
    cursor: pointer;
    background: #aaa;
  }
  &:active {
    background: #999;
  }
`;
