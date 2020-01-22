import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const useFetchCategory = fetcher => {
  const dispatch = useDispatch();
  const { page } = queryString.parse(useLocation().search);

  useEffect(() => {
    dispatch(fetcher(page));
  }, [page]);
};

export default useFetchCategory;
