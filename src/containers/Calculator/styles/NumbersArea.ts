import styled from "styled-components";

export default styled.div`
  grid-column: 1 / span 3;
  grid-row: 2 / span 3;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 1px;
`;
