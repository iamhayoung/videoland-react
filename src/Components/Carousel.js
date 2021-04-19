import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

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

    &:before {
      display: none;
    }
  }

  .slick-next {
    right: 0;
    z-index: 1;

    &:before {
      display: none;
    }
  }

  .slick-dots {
    bottom: 35px;
  }

  .slick-arrow-icon-left,
  .slick-arrow-icon-right {
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    top: 0;
    cursor: pointer;
    background: transparent;
    color: #fff;
    padding: 0;
    border: none;
    outline: none;
    transition: .3s ease-in-out;
    &:hover,
    &:focus {
      outline: none;
      background: transparent;
      opacity: 0.5;
      font-size: 40px;
      &::before {
        opacity: 1;
      }
    }
  }

  .slick-arrow-icon-left {
    left: 30px;
    [dir="rtl"] & {
      left: auto;
      right: 30px;
    }
  }

  .slick-arrow-icon-right {
    right: 30px;
    [dir="rtl"] & {
      left: 30px;
      right: auto;
    }
  }

  .slick-dots li button {
    &:before {
      color: #fff;
    }
  }
`;

const Slide = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 150px);
  padding: 50px 100px;
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
  text-align: right;
  color: #e50914;
  font-weight: 900;
  text-shadow: 2px 2px 0px #fff, 6px 6px 0px rgb(54 54 54 / 50%);
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

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} size="3x" className="slick-arrow-icon-right" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} size="3x" className="slick-arrow-icon-left" />
    </div>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  autoplay: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

function Carousel({ trendingData }) {
  return (
    <StyledSlider {...settings}>
      {
        trendingData
          .filter((item, index) => (index >= 10))
          .map((item, index) => (
            <Slide key={item.id}>
              <Background imgUrl={item.backdrop_path !== null ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : "#1d1d1d"} />
              <Contents>
                <Subtitle>Today's special movie {index + 1}</Subtitle>
                <MovieTitle>{item.title}</MovieTitle>
                <ViewDetailBtn to={`/movie/${item.id}`}>View detail →</ViewDetailBtn>
              </Contents>
            </Slide>
          ))
      }
    </StyledSlider>
  )
}

export default Carousel;