import React, { useState, useEffect } from "react";
import { tvApi } from "api";
import { Helmet } from "react-helmet"
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import IntroduceArea from "Components/IntroduceArea";
import Information from "Components/Information";
import Tabs from "Components/Tabs";

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

function TVDetail({ match: { params: { id }} }) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailInfo, setDetailInfo] = useState({})
  console.log(detailInfo)

  async function getTVDetail() {
    try {
      const { data } = await tvApi.tvDetail(id);
      setDetailInfo(data)
    } catch {
      setError("Can't find results.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTVDetail()
  }, [])

  return (
    <>
      <Helmet>
        <title>{`${detailInfo.name} | Videoland`}</title>
      </Helmet>
      {(isLoading) ? <Loader /> : (
        <Container>
          {detailInfo && detailInfo !== null && detailInfo !== undefined && (
            <>
              <Background imgUrl={detailInfo.backdrop_path !== null ? `https://image.tmdb.org/t/p/original${detailInfo.backdrop_path}` : "#1d1d1d"} />
              <IntroduceArea>
                <Information
                  title={detailInfo.name}
                  imgUrl={detailInfo.poster_path !== null ? `https://image.tmdb.org/t/p/original${detailInfo.poster_path}` : require("../assets/noPoster.png").default}
                  genres={detailInfo.genres}
                  year={detailInfo.first_air_date && detailInfo.first_air_date.substring(0, 4)}
                  runtime={detailInfo.episode_run_time[0]}
                  rate={detailInfo.vote_average}
                  seasons={detailInfo.number_of_seasons}
                  episodes={detailInfo.number_of_episodes}
                  description={detailInfo.overview}
                />
                <Tabs
                  videos={detailInfo.videos && detailInfo.videos.results.length > 0 && detailInfo.videos.results}
                  companies={detailInfo.production_companies && detailInfo.production_companies.length > 0 && detailInfo.production_companies}
                  countries={detailInfo.production_countries && detailInfo.production_countries.length > 0 && detailInfo.production_countries}
                  seasons={detailInfo.number_of_seasons}
                  episodes={detailInfo.number_of_episodes}
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

export default TVDetail;