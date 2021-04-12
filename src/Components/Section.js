import React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding: 30px;

  &:not(:last-child) {
    margin-bottom: 70px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 600;
  color: #fff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  grid-gap: 25px;
`;

function Section({ title, children }) {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
      </Container>
    </>
  )
}

export default Section;