import React, { useState, useEffect } from "react";
import { moviesApi } from "api";
import { Helmet } from "react-helmet"
import Loader from "Components/Loader";
import styled from "styled-components";
import Section from "Components/Section";
import Poster from "Components/Poster";

const Container = styled.div``;

function Movie() {
  const [isLoading, setLoading] = useState(true);
  const [nowPlayingData, setNowPlaying] = useState([]);
  const [popularData, setPopular] = useState([]);
  const [upcomingData, setUpcoming] = useState([]);
  console.log(nowPlayingData)
  console.log(popularData)
  console.log(upcomingData)

  async function getMoviesData() {
    const { data: { results: nowPlayingResults } } = await moviesApi.nowPlaying();
    setNowPlaying(nowPlayingResults);

    const { data: { results: popularResults } } = await moviesApi.popular();
    setPopular(popularResults);

    const { data: { results: upcomingResults } } = await moviesApi.upcoming();
    setUpcoming(upcomingResults);
  }

  useEffect(() => {
    try {
      getMoviesData()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Movies | Videoland</title>
      </Helmet>
      {(isLoading) ? <Loader /> : (
        // Now Playing
        <Container>
          {// Now Playing
            (nowPlayingData) && (nowPlayingData.length > 0) && (
              <Section title="Now Playing 🎬">
                {nowPlayingData.map(movie => (
                  <Poster key={movie.id} id={movie.id} title={movie.title} imgUrl={movie.poster_path} rate={movie.vote_average} year={movie.release_date.substring(0, 4)} />
                ))}
              </Section>
            )
          }

          {// Popular
            (popularData) && (popularData.length > 0) && (
              <Section title="Popular 🏆">
                {popularData.map(movie => (
                  <Poster key={movie.id} id={movie.id} title={movie.title} imgUrl={movie.poster_path} rate={movie.vote_average} year={movie.release_date.substring(0, 4)} />
                ))}
              </Section>
            )
          }

          {// Upcoming
            (upcomingData) && (upcomingData.length > 0) && (
              <Section title="Upcoming ⚡️">
                {upcomingData.map(movie => (
                  <Poster key={movie.id} id={movie.id} title={movie.title} imgUrl={movie.poster_path} rate={movie.vote_average} year={movie.release_date.substring(0, 4)} />
                ))}
              </Section>
            )
          }
        </Container>
      )}
    </>
  )
}

export default Movie;