import React from "react";
import styled from "styled-components";

const Poster = styled.img`
`;

const Contents = styled.div``;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 30px;
`;

const Genres = styled.span`
  position: relative;
  margin-right: 16px;

  & + &:before {
    position: absolute;
    content: "|";
    left: -10px;
  }
`;

function Information({ title, imgUrl, genres, year, runtime, rate }) {
  console.log(genres)
  return (
    <>
      <Poster src={imgUrl} />
      <Contents>
        <Title>{title}</Title>
        {genres.map(gen => <Genres>{gen.name}</Genres>)}
        <p>{year}</p>
        <p>{runtime}</p>
        <p>{rate}</p>
      </Contents>
    </>
  )
}

export default Information;