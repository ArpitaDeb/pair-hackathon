import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainPage.scss";
import img from "../../images/Arpita.jpg";
import padma from "../../images/Padma.jpg";

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
            <img src={padma} alt="" className="img"></img>
          </div>
          <h2 className="card__title">{data[0].name}</h2>
          <p>{data[0].title}</p>
          <p>{data[0].emal}</p>
          <p>{`Skill Sets: ${data[0].skills}\n`}</p>
        </div>
      </div>
      <div className="card__item">
        <div className="card__body">
          <div className="imgbox">
            <img src={img} alt="" className="img"></img>
          </div>
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
