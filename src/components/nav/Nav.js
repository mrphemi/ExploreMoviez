import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchAllGenres } from "../../actions/movie";

import SideNav from "./SideNav";
import TopNav from "./TopNav";
import Search from "../search/Search";

const Nav = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.movies.genres);

  // Toggle sidenav
  const toggleSideNav = () => {
    setIsSideNavOpen((prevState) => !prevState);
  };

  // Toggle searchbar
  const toggleSearchBar = () => {
    setIsSearchBarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    // Fetch all genres
    dispatch(fetchAllGenres());
  }, []);

  return (
    <>
      <TopNav
        toggleNav={toggleSideNav}
        toggleSearch={toggleSearchBar}
        isOpen={isSideNavOpen}
      />
      <Search isOpen={isSearchBarOpen} toggleSearch={toggleSearchBar} />
      <SideNav
        toggleNav={toggleSideNav}
        genres={genres}
        isOpen={isSideNavOpen}
      />
    </>
  );
};

export default Nav;
