import axios from "./axios";
import { Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Row.css";
import { img_300, unavailable } from "./config/config";
import ContentModal from "./ContentModal/ContentModal";
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <ContentModal id={movie.id}>
            <Badge
              badgeContent={movie.vote_average}
              color={movie.vote_average > 6 ? "primary" : "secondary"}
            />
            <img
              className="poster"
              src={
                movie.poster_path
                  ? `${img_300}/${movie.poster_path}`
                  : unavailable
              }
              alt={movie.title}
            />
            <b className="title">{movie.title || movie.name}</b>
            <span className="subTitle">
              {movie.media_type === "tv" ? "TV Series" : "Movies"}
              <span className="subTitle">
                {movie.first_air_date || movie.release_date}
              </span>
            </span>
          </ContentModal>
        ))}
      </div>
    </div>
  );
}

export default Row;
