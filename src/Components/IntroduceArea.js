import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 30vw 1fr;
  grid-template-rows: 0.5fr minmax(600px, 800px);
  grid-gap: 50px;
  padding: 50px;
`;

function IntroduceArea({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default IntroduceArea;