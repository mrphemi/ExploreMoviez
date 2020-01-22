import React from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";

import styles from "./Pagination.module.scss";

const Pagination = () => {
  const { url } = useRouteMatch();
  const lastPage = useSelector(state => state.movies.movies.total_pages);
  const page = useSelector(state => state.movies.movies.page);

  const isFirstPage = page === 1;
  const isLastPage = page === lastPage;

  return (
    <div className={styles.pagination}>
      <Link
        className={`${styles.first} ${isFirstPage ? styles.hide : ""}`}
        title="Go to first page"
        to={`${url}`}
      />

      <Link
        className={`${styles.prev} ${isFirstPage ? styles.hide : ""}`}
        title="Previous page"
        to={`${url}?page=${page - 1}`}
      />

      <p className={styles.page_no}>
        {page} / {lastPage}
      </p>

      <Link
        className={`${styles.next} ${isLastPage ? styles.hide : ""}`}
        title="Next page"
        to={`${url}?page=${page + 1}`}
      />

      <Link
        className={`${styles.last} ${isLastPage ? styles.hide : ""}`}
        title="Go to last page"
        to={`${url}?page=${lastPage}`}
      />
    </div>
  );
};

export default Pagination;
