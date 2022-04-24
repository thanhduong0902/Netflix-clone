const API_KEY = "1e654d3d2ad76350db78a446b60656af";

const requests = {
  fetchMovies: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  fetchTVseries: `/genre/tv/list?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
};
export default requests;
