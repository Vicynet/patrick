import { useState, useEffect } from "react";
import axios from "axios";

export const useEcommerceData = () => {
  const [ecommerceData, setEcommerceData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://cazadescuentos.net/api/discounts")
      .then((response) => {
        console.log("the data", response.data.data);
        setEcommerceData(response.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return { ecommerceData, isLoading };
};
