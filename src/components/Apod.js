import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/Apod.css";

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
      <div className="apod-data">
        <h1>
          <span style={{ color: "#008080" }}>A</span>stronomy{" "}
          <span style={{ color: "#008080" }}>P</span>icture{" "}
          <span style={{ color: "#008080" }}>O</span>f the{" "}
          <span style={{ color: "#008080" }}>D</span>ay{" "}
        </h1>
        <h3>Each day NASA upload an astronomical photos, here is todays..</h3>
        <img className="apodImg" src={data.url} alt="apod"></img>
        <h2>{data.title}</h2>
        <p>{data.date}</p>
        <p>{data.explanation}</p>
      </div>
    </div>
  );
};

export default Apod;
