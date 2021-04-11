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

const Description = styled.p``;

function Information({ title, imgUrl, genres, year, runtime, rate, seasons, episodes, description }) {
  console.log(seasons)
  console.log(episodes)
  return (
    <>
      <Poster src={imgUrl} />
      <Contents>
        <Title>{title}</Title>
        {genres && genres.length > 0 && (
          <Genres>
            {genres.map(genre => <Genre key={genre.id}>{genre.name}</Genre>)}
          </Genres>
        )}
        {seasons && (
          <List>
            <ListItem>{seasons} Seasons</ListItem>
            <ListItem>{episodes} Episodes</ListItem>
          </List>
        )}
        <List>
          <ListItem>{year}</ListItem>
          <ListItem>{runtime} min</ListItem>
        </List>
        <Rate>{rate} / 10</Rate>
        <Description>{description}</Description>
      </Contents>
    </>
  )
}

export default Information;