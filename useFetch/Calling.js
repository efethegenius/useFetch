import React from "react";
import { useFetch } from "./useFetch";

const url = "https://restcountries.com/v2/all";
export const Calling = () => {
  const { loading, data } = useFetch(url);
  return <div></div>;
};
