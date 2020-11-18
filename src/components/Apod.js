import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/Apod.css";

const Apod = () => {
  const [apod, setApod] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=oEknIXCWLLvYbvn5KqiSdC2wIhKRXjgN4aNiSLmF"
        )
        .then(({ data }) => {
          console.log(data);
          setApod(data.url);
        });
    };
    fetchData();
  });

  return (
    <div className="Apod">
      <img className="apodImg" src={apod} alt="apod"></img>
    </div>
  );
};

export default Apod;
