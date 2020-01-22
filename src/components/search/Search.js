import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import styles from "./Search.module.scss";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  // Create ref for search input
  inputRef = React.createRef();

  onTextChange = e => {
    // set state on input change
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  focus = () => {
    this.inputRef.current.focus();
  };

  search = e => {
    e.preventDefault();
    const searchTerm = this.state.searchTerm;
    if (!searchTerm) {
      return;
    } else {
      // Redirect to search results page
      this.props.history.push(`/search_results/${searchTerm}`);
      // Clear state, Clear input and hide seearch bar
      this.setState({ searchTerm: "" });
      this.inputRef.current.value = "";
      this.props.toggleSearch();
    }
  };

  componentDidUpdate() {
    const { isOpen } = this.props;
    if (isOpen) {
      this.focus();
    }
  }

  render() {
    const { isOpen } = this.props;
    return (
      <form className={`${styles.search} ${isOpen ? styles.show : ""}`} onSubmit={this.search}>
        <input
          type="text"
          name="searchTerm"
          defaultValue={this.state.searchTerm}
          onChange={this.onTextChange}
          placeholder="Search movie"
          ref={this.inputRef}
        />
        <i className="icon ion-ios-search" />
      </form>
    );
  }
}

Search.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSearch: PropTypes.func.isRequired
};

export default withRouter(Search);
