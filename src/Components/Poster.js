import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Img = styled.img`
  max-width: 100%;
`;
const Title = styled.h3``;
const Rate = styled.span``;

function Poster({ title, imgUrl, rate }) {
  return (
    <>
      <Container>
        <Img src={`https://image.tmdb.org/t/p/w300/${imgUrl}`} />
        <Title>{title}</Title>
        <Rate>{rate}</Rate>
      </Container>
    </>
  )
}

export default Poster;