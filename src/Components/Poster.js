import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Piece = styled(Link)`
  display: block;
  position: relative;
  color: #fff;
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
  margin-bottom: 5px;
  font-size: 14px;
`;

const Year = styled.p`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

function Poster({ id, title, imgUrl, rate, year, isMovie }) {
  return (
    <>
      <Piece to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
        <ImgContainer>
          <Img imgUrl={imgUrl !== null ? `https://image.tmdb.org/t/p/w300${imgUrl}` : require("../assets/noPoster.png").default} />
          <Rating><Rate>{rate > 5 ? "🥰" : "🤨"}</Rate>{rate} / 10</Rating>
        </ImgContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Piece>
    </>
  )
}

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  rate: PropTypes.number.isRequired,
  year: PropTypes.string,
  isMovie: PropTypes.bool.isRequired
}

export default Poster;