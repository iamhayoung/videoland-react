import React, { useState, useEffect } from "react";
import { moviesApi } from "api";
import { Helmet } from "react-helmet"
import Loader from "Components/Loader";
import Slider from "react-slick";
import styled from "styled-components";
import Message from "Components/Message";

const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 60px);
`;

const StyledSlider = styled(Slider)`
  .slick-slider {
    height: 100vh;
  }

  .slick-list {
    height: calc(100vh - 60px);
  }

  .slick-prev {
    left: 0;
    z-index: 1;
  }

  .slick-next {
    right: 0;
    z-index: 1;
  }

  .slick-dots {
    bottom: 50px;
  }
`;

const Slide = styled.div`
  position: relative;
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
  opacity: 0.6;
  z-index: -1;
`;

const Contents = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Subtitle = styled.h3`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #fff;
`;

const MovieTitle = styled.h2`
  font-size: 70px;
  color: #fff;
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1
  }

  return (
    <>
      <Helmet>
        <title>Videoland!</title>
      </Helmet>
      {(isLoading) ? <Loader /> : (
        <Container>
            <StyledSlider {...settings}>
            {trendingData.map(item => (
              <>
                <Slide key={item.id}>
                  <Background imgUrl={item.backdrop_path !== null ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : "#1d1d1d"} />
                  <Contents>
                    <Subtitle>Today's special movie</Subtitle>
                    <MovieTitle>{item.title}</MovieTitle>
                  </Contents>
                </Slide>
              </>
            ))}
            </StyledSlider>
          {error && <Message text={error} color="#e50914" />}
        </Container>
      )}
    </>
  )
}

export default Home;