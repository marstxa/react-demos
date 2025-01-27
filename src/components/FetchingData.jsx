import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchingData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        console.log(response.data.meals);
        setData(response.data.meals);
      })
      .catch(() => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const itemsList = data.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <div className="card bg-base-300 w-md">
        <div className="card-body">
          <div className="flex justify-center items-center w-full h-6/8 p-10">
            <img
              className="w-72 h-auto border-2 border-white shadow-xl"
              src={strMealThumb}
              alt={strMeal}
            />
          </div>
          <div className="flex w-full h-2/8 flex-row justify-between items-center">
            <p className="card-title">{strMeal}</p>
            <span className="badge badge-info text-small badge-sm font-semibold">
              #{idMeal}
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="grid grid-cols-3 grid-rows-3 gap-6">{itemsList}</div>
    </div>
  );
}

export default FetchingData;
