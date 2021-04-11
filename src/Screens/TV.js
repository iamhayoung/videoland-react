import React, { useState, useEffect } from "react";
import { tvApi } from "api";
import { Helmet } from "react-helmet"
import Loader from "Components/Loader";

function TV() {
  const [isLoading, setLoading] = useState(true);
  const [airingTodayData, setAiringToday] = useState([]);
  const [popularData, setPopular] = useState([]);
  const [topRatedData, setTopRated] = useState([]);
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
    } catch (error) {
      console.error(error)
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
        <p>TV</p>
      )}
    </>
  )
}

export default TV;