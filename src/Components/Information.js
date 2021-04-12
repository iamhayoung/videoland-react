import React from "react";
import styled from "styled-components";

const Poster = styled.img`
  max-width: 35%;
  width: 100%;
`;

const Contents = styled.div`
  max-width: 65%;
  width: 100%;
  margin-left: 50px;
  flex: 0 1 auto;
`;

const TitleAndRate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  width: 80%;
  font-size: 50px;
  line-height: 1.2;
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;

const Spec = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: #c3c2c2;
`;

const Item = styled.span`
  font-weight: 300;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Genres = styled.ul`
  display: flex;
`;

const Genre = styled.li`
  position: relative;
  font-weight: 300;

  & + & {
    margin-left: 16px;
  }

  & + &:before {
    position: absolute;
    content: "|";
    left: -10px;
  }
`;

const Description = styled.p`
  display: -webkit-box;
  overflow : hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  font-weight: 300;
  line-height: 1.6;
`;

function Information({ title, imgUrl, genres, year, runtime, rate, seasons, episodes, description }) {
  console.log(seasons)
  console.log(episodes)
  return (
    <>
      <Poster src={imgUrl} />
      <Contents>
        <TitleAndRate>
          <Title>{title}</Title>
          <Rate>{rate} ⭐️</Rate>
        </TitleAndRate>
        <Spec>
          <Item>{year}</Item>
          <Divider>・</Divider>
          <Item>{runtime} min</Item>
          <Divider>・</Divider>
          {genres && genres.length > 0 && (
            <Genres>
              {genres.map(genre => <Genre key={genre.id}>{genre.name}</Genre>)}
            </Genres>
          )}
          {seasons && (
            <>
              <Divider>・</Divider>
              <Item>{seasons} Seasons</Item>
              <Divider>・</Divider>
              <Item>{episodes} Episodes</Item>
            </>
          )}
        </Spec>
        <Description>{description}</Description>
      </Contents>
    </>
  )
}

export default Information;