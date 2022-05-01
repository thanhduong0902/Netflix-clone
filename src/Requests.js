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
  fetchTVMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10770`,
  fetchAnime:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  fetchCrimeMv:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
  fetchDramaMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
  fetchFamilyMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10751`,
  fetchFantasyMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
  fetchHistoryMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=36`,
  fetchMusicMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10402`,
  fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchScienceFictionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  fetchThrillerMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
  fetchWarMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10752`,
  fetchWesternMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
  
  fetchTalk:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10767`,
  fetchDrama:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=18`,
  fetchCrime:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=80`,
  fetchAnimation:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=16`,
  fetchScienceFiction:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=878`,
  fetchActionAdventure:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10759`,
  fetchComedyTv:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchDocumentaryTv:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fetchFamily:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10751`,
  fetchKids:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10762`,
  fetchMystery:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchNews:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10763`,
  fetchReality:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10764`,
  fetchSciFiFantasy:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10765`,
  fetchSoap:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10766`,
  fetchWarPolitics:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10768`,
  fetchWestern:`/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=37`,

};
export default requests;
