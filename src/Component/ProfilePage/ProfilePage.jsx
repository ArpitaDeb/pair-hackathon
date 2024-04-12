import React, { useEffect, useState } from "react";
import "./ProfilePage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import padma from "../../images/Padma.jpg";
import Arpita from "../../images/Arpita.jpg";

function ProfilePage() {
  const personId = useParams();
  const [data, setdata] = useState(null);

  useEffect(() => {
    try {
      const getPersonPortfolio = async () => {
        const response = await axios.get(
          `http://localhost:8080/portfolio/${personId.id}`
        );
        console.log(response.data);
        setdata(response.data);
      };
      getPersonPortfolio();
    } catch (error) {
      console.error(error);
    }
  }, [personId]);

  if (!data) {
    return <>Loading..</>;
  }

  return (
    <div className="card">
      <div className="card__item" key={data.id}>
        <div className="card__body">
          <div className="imgbox">
            <img
              src={data.id === 0 ? padma : Arpita}
              alt=""
              className="img"
            ></img>
          </div>
          <h2 className="card__title">{data.name}</h2>
          <p>{data.title}</p>
          <p>{data.emal}</p>
          <p>{`Skill Sets: ${data.skills}\n`}</p>
          <h3>EXPERIENCE</h3>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
