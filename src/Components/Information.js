import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImdb } from "@fortawesome/free-brands-svg-icons"
import PropTypes from "prop-types";

const Poster = styled.img`
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;

const Contents = styled.div`
  width: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
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
  font-size: 14px;
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

const Imdb = styled.a`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: rgb(245, 197, 24);
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

function Information({ title, imgUrl, genres, year, runtime, rate, seasons, episodes, description, imdb }) {
  return (
    <>
      <Poster src={imgUrl} />
      <Contents>
        <TitleAndRate>
          <Title>{title}</Title>
          {imdb && imdb !== null && (
            <>
              <Imdb href={`https://www.imdb.com/title/${imdb}`} target="_blank"><FontAwesomeIcon icon={faImdb} /></Imdb>
            </>
          )}
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

Information.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  year: PropTypes.string.isRequired,
  runtime: PropTypes.number,
  rate: PropTypes.number,
  seasons: PropTypes.number,
  episodes: PropTypes.number,
  description: PropTypes.string,
  imdb: PropTypes.string
}

export default Information;