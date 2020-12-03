import React, { useEffect, useState } from "react";
import axios from "axios";

import Aos from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 150 });
  }, []);

  return (
    <div className="Apod" data-testid="apod" id="apod">
      <h1 data-aos="fade-right">Astronomy Picture of The Day</h1>
      <h3 data-aos="fade-left">
        Each day NASA uploads an astronomical photo, here is todays..
      </h3>
      <div className="apod-data">
        <img
          data-aos="fade-right"
          className="apodImg"
          src={data.url}
          alt="apod"
        ></img>
        <div data-aos="fade-left" className="apod-info">
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
