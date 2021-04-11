import React, { useState } from "react";
import { moviesApi, tvApi } from "api";
import { Helmet } from "react-helmet"
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Poster from "Components/Poster";
import Message from "Components/Message";

const ResultInfo = styled.p`
  margin: 30px 0;
  color: #fff;
  text-align: center;
`;

const Container = styled.section`
  &:not(:last-child) {
    margin-bottom: 100px;
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
  const [isLoading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState(null);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [movieResultNumber, setMovieResultNumber] = useState(null);
  const [tvResultNumber, setTVResultNumber] = useState(null);
  const [error, setError] = useState(null);
  console.log(keyword)
  console.log(movies);
  console.log(tvShows);
  console.log(movieResultNumber)
  console.log(tvResultNumber)
  console.log(error)

  function getInputText(event) {
    const { target: { value } } = event;
    setKeyword(value);
  }

  async function getSearchData(event) {
    event.preventDefault();
    if (!keyword) {
      return
    }

    try {
      setLoading(true);
      const { data: { results: movieResults } } = await moviesApi.search(keyword);
      const { data: { total_results: movieResultsNum } } = await moviesApi.search(keyword);
      const { data: { results: tvResults } } = await tvApi.search(keyword);
      const { data: { total_results: tvResultsNum } } = await tvApi.search(keyword);
      setMovies(movieResults);
      setTVShows(tvResults);
      setMovieResultNumber(movieResultsNum);
      setTVResultNumber(tvResultsNum);
    } catch {
      setError("Can't find results.")
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
      {(isLoading) ? <Loader /> : (
        <>
          {movieResultNumber >= 1 && tvResultNumber >= 1 && (
            <ResultInfo>Showing results for "{keyword}"</ResultInfo>
          )}
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
          {error && <Message text={error} color="#e50914" />}
          {movieResultNumber === 0 && tvResultNumber === 0 && (
            <Message text="Nothing found 😢" color="#fff" />
          )}
        </>
      )}
    </>
  )
}

export default Search;