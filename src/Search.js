import React, { useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import "./Search.css";
import { API_KEY } from "./Requests";

function Search(props) {
  const fetchSearch = async () => {
    try {
      const dataMovies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${props.searchText}&page=${props.page}&include_adult=false`
      );

      const dataTv = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${props.searchText}&page=${props.page}&include_adult=false`
      );

      props.setContent(dataMovies.data.results.concat(dataTv.data.results));

      props.setNumOfPages(
        dataMovies.data.total_pages + dataTv.data.total_pages
      );
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // props.setShowSearch(true);
  }, [props.page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearch();
    props.setShowSearch(true);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Search"
          id="outlined-size-small"
          size="small"
          className="search__input"
          onChange={(e) => props.setSearchText(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
