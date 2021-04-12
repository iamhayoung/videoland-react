import React, { useState, useEffect } from "react";
import { moviesApi } from "api";
import { Helmet } from "react-helmet"
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import IntroduceArea from "Components/IntroduceArea";
import Information from "Components/Information";

const Container = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  color: #fff;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${ props => props.imgUrl});
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`;

function MovieDetail({ match: { params: { id }} }) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailInfo, setDetailInfo] = useState({})
  console.log(detailInfo)

  async function getMovieDetail() {
    try {
      const { data } = await moviesApi.movieDetail(id);
      setDetailInfo(data)
    } catch {
      setError("Can't find results.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovieDetail()
  }, [])

  return (
    <>
      <Helmet>
        <title>{`${detailInfo.title} | Videoland`}</title>
      </Helmet>
      {(isLoading) ? <Loader /> : (
        <Container>
          {detailInfo && detailInfo !== null && detailInfo !== undefined && (
            <>
              <Background imgUrl={detailInfo.backdrop_path !== null ? `https://image.tmdb.org/t/p/original${detailInfo.backdrop_path}` : "#1d1d1d"} />
              <IntroduceArea>
                <Information
                  title={detailInfo.title}
                  imgUrl={detailInfo.poster_path !== null ? `https://image.tmdb.org/t/p/original${detailInfo.poster_path}` : require("../assets/noPosterSmall.png").default}
                  genres={detailInfo.genres}
                  year={detailInfo.release_date && detailInfo.release_date.substring(0, 4)}
                  runtime={detailInfo.runtime}
                  rate={detailInfo.vote_average}
                  description={detailInfo.overview}
                  imdb={detailInfo.imdb_id}
                />
              </IntroduceArea>
            </>
          )}
          {error && <Message text={error} color="#e50914" />}
        </Container>
      )}
    </>
  )
}

export default MovieDetail;