import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 125px);
  gap: 25px calc((100% - 625px) / 4);
`;

const Item = styled.div`
`;

const Image = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const Poster = styled.div`
  background-image: url(${props => props.imgUrl});
  height: 220px;
  background-size: cover;
  background-position: center;
`;

const Name = styled.p`
  font-weight: 300;
  text-align: center;
`;

const Message = styled.p``;

function Season({ seasons }) {
  console.log(seasons)
  return (
    <Container>
      {seasons && seasons.length > 0 ?
        seasons.map(season => (
          <Item key={season.id}>
            {
              <Image>
                <Poster imgUrl={season.poster_path !== null ? `https://image.tmdb.org/t/p/w200${season.poster_path}` : require("../assets/noPoster.png").default} />
              </Image>
            }
            <Name>{season.name}</Name>
          </Item>
        ))
        : (<Message>No data😢</Message>)
      }
    </Container>
  )
}

export default Season;