import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/Apod2.css";

const Apod = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=oEknIXCWLLvYbvn5KqiSdC2wIhKRXjgN4aNiSLmF"
        )
        .then(({ data }) => {
          setData(data);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="Apod">
      <h1>Astronomy Picture of The Day</h1>
      <h3>Each day NASA uploads an astronomical photo, here is todays..</h3>
      <div className="apod-data">
        <img className="apodImg" src={data.url} alt="apod"></img>
        <div className="apod-info">
          <h2>
            {data.title} - <br />
            <span style={{ fontSize: "0.7em", fontStyle: "italic" }}>
              {data.date}
            </span>
          </h2>
          <p>{data.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default Apod;
