import React, { useState } from "react";
import { moviesApi, tvApi } from "api";
import { Helmet } from "react-helmet"
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Poster from "Components/Poster";

const Container = styled.div`
  &:not(:last-child) {
    margin: 80px 0 100px;
  }
`;

const Form = styled.form``;
const Input = styled.input`
  width: 100%;
  background: #1d1d1d;
  color: #fff;
  font-size: 30px;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  outline: none;
  border: none;
`;

function Search() {
  const [isLoading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState(null);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  console.log(keyword)
  console.log(movies);
  console.log(tvShows);

  function getInputText(event) {
    const { target: { value } }= event;
    setKeyword(value);
  }

  async function getSearchData(event) {
    event.preventDefault();
    try {
      const { data: { results: movieResults} } = await moviesApi.search(keyword);
      const { data: { results: tvResults} } = await tvApi.search(keyword);
      setMovies(movieResults);
      setTVShows(tvResults);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Search | Videoland</title>
      </Helmet>
      <Form onSubmit={getSearchData}>
        <Input onChange={getInputText} placeholder="Search Movies or TV Shows 🔍" />
      </Form>
      {movies && movies.length > 0 &&
        <Container>
          <Section title="Movie Results">
            {movies.map(movie => (
              <Poster key={movie.id} id={movie.id} title={movie.title} imgUrl={movie.poster_path} rate={movie.vote_average} year={movie.release_date && movie.release_date.substring(0, 4)} isMovie={true} />
            ))}
          </Section>
        </Container>
      }
      {tvShows && tvShows.length > 0 &&
        <Container>
          <Section title="TV Show Results">
            {tvShows.map(show => (
              <Poster key={show.id} id={show.id} title={show.name} imgUrl={show.poster_path} rate={show.vote_average} year={show.first_air_date && show.first_air_date.substring(0, 4)} isMovie={false} />
            ))}
          </Section>
        </Container>
      }
    </>
  )
}

export default Search;