import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Piece = styled(Link)`
  display: block;
  position: relative;
`;

const Img = styled.div`
  width: 100%;
  height: 210px;
  background-image: url(${ props => props.imgUrl});
  background-position: center;
  background-size: cover;
  transition: .1s linear;
`;

const Rating = styled.div`
  position: absolute;
  bottom: 7px;
  right: 7px;
  font-size: 14px;
  color: #fff;
  opacity: 0;
  transition: .1s linear;
`;

const Rate = styled.span`
  margin-right: 8px;
`;

const ImgContainer = styled.div`
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;

  &:hover {
    ${Img} {
      opacity: 0.3;
      transform: scale(1.05);
    }

    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.h3`
  color: #fff;
`;

function Poster({ id, title, imgUrl, rate }) {
  return (
    <>
      <Piece to={`/movie/${id}`}>
        <ImgContainer>
          <Img imgUrl={imgUrl !== null ? `https://image.tmdb.org/t/p/w300${imgUrl}` : require("../assets/noPosterSmall.png").default} />
          <Rating><Rate>{rate > 5 ? "🥰" : "🤨"}</Rate>{rate} / 10</Rating>
        </ImgContainer>
        <Title>{title}</Title>
      </Piece>
    </>
  )
}

export default Poster;