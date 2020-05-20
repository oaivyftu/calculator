import styled from "styled-components";

export default styled.div`
  grid-column: 4 / span 1;
  grid-row: 1 / span 4;
  display: grid;
  grid-template: repeat(4, 1fr) / 1fr;
  gap: 1px;
`;
