import React from "react";
import styled from "styled-components";

const Poster = styled.img`
`;

const Contents = styled.div``;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 30px;
`;

const Genres = styled.ul`
  display: flex;
`;

const Genre = styled.li`
  position: relative;

  & + & {
    margin-left: 16px;
  }

  & + &:before {
    position: absolute;
    content: "|";
    left: -10px;
  }
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  position: relative;

  & + & {
    margin-left: 16px;
  }
`;


const Rate = styled.span``;

function Information({ title, imgUrl, genres, year, runtime, rate }) {
  console.log(genres)
  return (
    <>
      <Poster src={imgUrl} />
      <Contents>
        <Title>{title}</Title>
        <Genres>
          {genres.map(genre => <Genre>{genre.name}</Genre>)}
        </Genres>
        <List>
          <ListItem>{year}</ListItem>
          <ListItem>{runtime} min</ListItem>
        </List>
        <Rate>{rate}</Rate>
      </Contents>
    </>
  )
}

export default Information;