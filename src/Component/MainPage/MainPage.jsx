import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainPage.scss";

function MainPage() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get("http://localhost:8080/portfolio");
        setdata(response.data);
      };
      getData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!data.length) {
    return <>Loading</>;
  }

  return (
    <div className="card">
      <div className="card__item">
        <div className="card__body">
          <div className="imgbox">
            <img
              src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
              alt=""
              className="img"
            ></img>
          </div>
          <h2 className="card__title">{data[0].name}</h2>
          <p>{data[0].title}</p>
          <p>{data[0].emal}</p>
          <p>{`Skill Sets: ${data[0].skills}\n`}</p>
        </div>
      </div>
      <div className="card__item">
        <div className="card__body">
          <img></img>
          <h2 className="card__title">{data[1].name}</h2>
          <p>{data[1].title}</p>
          <p>{data[1].emal}</p>
          <p>{`Skill Sets: ${data[1].skills}`}</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
