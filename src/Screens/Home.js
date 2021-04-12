import React, { useState, useEffect } from "react";
import { moviesApi } from "api";
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom";
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
    bottom: 35px;
  }
`;

const Slide = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 150px);
  padding: 50px;
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
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
`;

const MovieTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 54px;
  color: #e50914;
  font-weight: 900;
  text-shadow: 2px 2px #fff;
`;

const ViewDetailBtn = styled(Link)`
  display: block;
  padding: 15px 30px;
  background: #e50914;
  color: #fff;
  font-weight: 600;
  border-radius: 30px;
  transition: .3s linear;

  &:hover {
    background: #fff;
    color: #e50914;
  }
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
            {trendingData.map((item, index) => (
              <>
                <Slide key={item.id}>
                  <Background imgUrl={item.backdrop_path !== null ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : "#1d1d1d"} />
                  <Contents>
                    <Subtitle>Today's special movie {index + 1}</Subtitle>
                    <MovieTitle>{item.title}</MovieTitle>
                    <ViewDetailBtn to={`/movie/${item.id}`}>View detail</ViewDetailBtn>
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