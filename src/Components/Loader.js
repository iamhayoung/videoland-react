import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
`;

const Loading = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: #fff;
`;

const Spinner = styled(FontAwesomeIcon)`
  margin-bottom: 25px;
  color: #fff;
  font-size: 80px;
  animation: ${spin} 2s linear infinite;
`;

function Loader() {
  return (
    <Container>
      <Spinner icon={faSpinner} />
      <Loading>Loading...</Loading>
    </Container>
  )
}

export default Loader;