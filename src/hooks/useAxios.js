import { useEffect, useState } from "react";
import axios from "axios";
const ROUTE = process.env.REACT_APP_ROUTE;

export const useAxios = (params) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${ROUTE}${params}`, {withCredentials: true})
      .then((result) => {
        setData(result.data)
        
    })
      .catch((err) => console.error(err));
  }, [params]);

  return data;
};
