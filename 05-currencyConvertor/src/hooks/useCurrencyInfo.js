import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.frankfurter.app/latest?amount=1&from=${baseCurrency}&to=INR`
    )
      .then((res) => res.json())
      .then((res) => setData(res.rates));
  }, [baseCurrency]);
  return data;
}
export default useCurrencyInfo;
