import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: grid;
  grid-template-columns: 30vw 1fr;
  grid-template-rows: 0.5fr minmax(100px, 500px);
  grid-gap: 50px;
  padding: 50px;
`;

function IntroduceArea({ children }) {
  console.log(children)
  return (
    <Container>
      {children}
    </Container>
  )
}

IntroduceArea.propTypes = {
  children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default IntroduceArea;