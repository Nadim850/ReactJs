import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Nadim850")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resData) => {
  //       console.log(resData);
  //       setData(resData);
  //     })
  //     .catch((error) => {
  //       console.log("error while fetching data", error);
  //     });
  // }, []);

  return (
    <div className="flex items-center bg-gray-500 p-4 text-white text-3xl m-4">
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <p>{data.bio}</p>
          <p>{data.followers}</p>
          <img src={data.avatar_url} alt="DP" width={100} />
        </div>
      ) : (
        <p>loading....</p>
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
