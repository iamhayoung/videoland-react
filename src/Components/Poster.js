import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  display: block;
  position: relative;
`;

const Img = styled.div`
  width: 100%;
  height: 210px;
  background-image: url(${ props => props.imgUrl});
  background-position: center;
  background-size: cover;
`;

const Title = styled.h3`
  color: #fff;
`;

const Rate = styled.span`
  color: #fff;
`;

function Poster({ id, title, imgUrl, rate }) {
  return (
    <>
      <Container to={`/movie/${id}`}>
        <Img imgUrl={imgUrl !== null ? `https://image.tmdb.org/t/p/w300${imgUrl}` : require("../assets/noPosterSmall.png").default} />
        <Title>{title}</Title>
        <Rate>{rate}</Rate>
      </Container>
    </>
  )
}

export default Poster;