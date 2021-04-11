import React, { useState, useEffect } from "react";
import { moviesApi } from "api";
import { Helmet } from "react-helmet"
import Loader from "Components/Loader";
import styled from "styled-components";
import Section from "Components/Section";

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
        <title>Movies | Movieland</title>
      </Helmet>
      {(isLoading) ? <Loader /> : (
        // Now Playing
        <Container>
          {// Now Playing
            (nowPlayingData) && (nowPlayingData.length > 0) && (
              <Section title="Now Playing">
                <p>hogeeee</p>
              </Section>
            )
          }

          {// Popular
            (popularData) && (popularData.length > 0) && (
              <Section title="Popular">
                <p>hogeeee</p>
              </Section>
            )
          }

          {// Upcoming
            (upcomingData) && (upcomingData.length > 0) && (
              <Section title="Upcoming">
                <p>hogeeee</p>
              </Section>
            )
          }
        </Container>
      )}
    </>
  )
}

export default Movie;