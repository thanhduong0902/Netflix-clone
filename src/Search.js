import React, { useEffect } from "react";
import axios from "axios";
import "./Search.css";
import { API_KEY } from "./Requests";

function Search(props) {
  const fetchSearch = async () => {
    try {
      const dataMovies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${props.searchText}&page=${props.page}&include_adult=false`
      );

      // const dataTv = await axios.get(
      //   `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${props.searchText}&page=${props.page}&include_adult=false`
      // );

      // props.setContent(dataMovies.data.results.concat(dataTv.data.results));

      // const totalPages = dataMovies.data.total_pages + dataTv.data.total_pages;
      // props.setNumOfPages(totalPages);


      props.setContent(dataMovies.data.results);

      props.setNumOfPages(dataMovies.data.page);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [props.page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearch();
    props.setShowSearch(true);
    props.setSearchText('')
  };

  return (
      <form onSubmit={handleSubmit} className="search">
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="search__input"
            onChange={(e) => props.setSearchText(e.target.value)}
          />
        </div>
      </form>
  );
}

export default Search;
