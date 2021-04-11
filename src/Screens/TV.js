import React, { useState, useEffect } from "react";
import { tvApi } from "api";
import { Helmet } from "react-helmet"
import Loader from "Components/Loader";
import styled from "styled-components";
import Section from "Components/Section";
import Poster from "Components/Poster";
import Message from "Components/Message";

const Container = styled.div``;

function TV() {
  const [isLoading, setLoading] = useState(true);
  const [airingTodayData, setAiringToday] = useState([]);
  const [popularData, setPopular] = useState([]);
  const [topRatedData, setTopRated] = useState([]);
  const [error, setError] = useState(null);
  console.log(airingTodayData);
  console.log(popularData);
  console.log(topRatedData);

  async function getTVData() {
    const { data: { results: airingTodayResults} } = await tvApi.airingToday();
    setAiringToday(airingTodayResults)
    const { data: { results: popularResults} } = await tvApi.popular();
    setPopular(popularResults)
    const { data: { results: topRatedResults} } = await tvApi.topRated();
    setTopRated(topRatedResults)
  }

  useEffect(() => {
    try {
      getTVData()
    } catch {
      setError("Can't find results.")
    } finally {
      setLoading(false);
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>TV Shows | Videoland</title>
      </Helmet>
      {(isLoading) ? <Loader /> : (
        <Container>
          {// Airing Today
            (airingTodayData) && (airingTodayData.length > 0) && (
              <Section title="Airing Today 📡">
                {airingTodayData.map(show => <Poster key={show.id} id={show.id} title={show.name} imgUrl={show.poster_path} rate={show.vote_average} year={show.first_air_date && show.first_air_date.substring(0, 4)} isMovie={false} />)}
              </Section>
            )
          }
          {// Popular
            (popularData) && (popularData.length > 0) && (
              <Section title="Popular 🔥">
                {popularData.map(show => <Poster key={show.id} id={show.id} title={show.name} imgUrl={show.poster_path} rate={show.vote_average} year={show.first_air_date && show.first_air_date.substring(0, 4)} isMovie={false} />)}
              </Section>
            )
          }
          {// Top Rated
            (topRatedData) && (topRatedData.length > 0) && (
              <Section title="Top Rated 🌈">
                {topRatedData.map(show => <Poster key={show.id} id={show.id} title={show.name} imgUrl={show.poster_path} rate={show.vote_average} year={show.first_air_date && show.first_air_date.substring(0, 4)} isMovie={false} />)}
              </Section>
            )
          }

          {error && <Message text={error} color="#e50914" />}
        </Container>
      )}
    </>
  )
}

export default TV;