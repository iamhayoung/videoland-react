import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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