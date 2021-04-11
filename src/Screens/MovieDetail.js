import React, { useState, useEffect } from "react";
import { moviesApi } from "api";
import { Helmet } from "react-helmet"
import Loader from "Components/Loader";

function MovieDetail(props) {
  const [isLoading, setLoading] = useState(true);
  console.log(props)

  return (
    <>
      <Helmet>
        <title>hoge | Movies | Movieland</title>
      </Helmet>
      {(isLoading) ? <Loader /> : (
        <p>Movie detail</p>
      )}
    </>
  )
}

export default MovieDetail;