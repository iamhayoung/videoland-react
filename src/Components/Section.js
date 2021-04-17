import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  grid-template-columns: repeat(auto-fit, 125px);
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

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section;