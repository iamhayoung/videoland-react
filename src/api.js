import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "b35b41610f8287ba322c0ed02d033aeb",
    language: "en-US"
  }
})

export const moviesApi = {
  movieDetail: id => api.get(`movie/${id}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  nowPlaying: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
  upcoming: () => api.get("movie/upcoming"),
  search: text => api.get("search/movie", {
    params: {
      query: encodeURIComponent(text)
    }
  }),
  trending: () => api.get("trending/movie/day")
}

export const tvApi = {
  tvDetail: id => api.get(`tv/${id}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  topRated: () => api.get("tv/top_rated"),
  search: text => api.get("search/tv", {
    params: {
      query: encodeURIComponent(text)
    }
  })
}