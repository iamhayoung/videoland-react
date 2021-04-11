import React, { useState, useEffect } from "react";
import { tvApi } from "api";
import { Helmet } from "react-helmet"
import Loader from "Components/Loader";

function TVDetail() {
  const [isLoading, setLoading] = useState(true);

  // async function getMoviesData() {
  //   const a = await moviesApi.nowPlaying();
  //   console.log(a)
  // }

  useEffect(() => {
    try {
      // getMoviesData()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>hoge | TV Shows | Videoland</title>
      </Helmet>
      {(isLoading) ? <Loader /> : (
        <p>TV Detail</p>
      )}
    </>
  )
}

export default TVDetail;