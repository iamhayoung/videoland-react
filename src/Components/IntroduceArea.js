import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 30vw 59vw;
  grid-template-rows: 0.5fr 1fr;
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