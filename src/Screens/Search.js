import React, { useState } from "react";
import { moviesApi, tvApi } from "api";
import { Helmet } from "react-helmet"
import styled from "styled-components";

const Form = styled.form``;
const Input = styled.input``;

function Search(props) {
  const [keyword, setKeyword] = useState(null);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  console.log(props)
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
    }
  }

  return (
    <>
      <Helmet>
        <title>Search | Videoland</title>
      </Helmet>
      <Form onSubmit={getSearchData}>
        <Input onChange={getInputText} placeholder="Search Movies or TV Shows" />
      </Form>
    </>
  )
}

export default Search;