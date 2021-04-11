import React from "react";
import styled from "styled-components";

const Container = styled.section`
  &:not(:last-child) {
    margin-bottom: 70px;
  }
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

function Section({ title, children }) {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <p>{children}</p>
      </Container>
    </>
  )
}

export default Section;