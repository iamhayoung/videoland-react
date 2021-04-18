import React, { useState, useEffect } from "react";
import { moviesApi } from "api";
import { Helmet } from "react-helmet"
import Loader from "Components/Loader";
import styled from "styled-components";
import Message from "Components/Message";
import Carousel from "Components/Carousel";

const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 60px);
`;

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [trendingData, setTrending] = useState([]);
  const [error, setError] = useState(null);
  console.log(trendingData)

  async function getMoviesData() {
    const { data: { results } } = await moviesApi.trending();
    setTrending(results)
  }

  useEffect(() => {
    try {
      getMoviesData()
    } catch {
      setError("Can't find results.")
    } finally {
      setLoading(false);
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Videoland!</title>
      </Helmet>
      {(isLoading) ? <Loader /> : (
        <Container>
          <Carousel trendingData={trendingData} />
          {error && <Message text={error} color="#e50914" />}
        </Container>
      )}
    </>
  )
}

export default Home;