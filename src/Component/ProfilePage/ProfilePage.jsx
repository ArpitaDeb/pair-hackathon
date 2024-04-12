import React, { useEffect, useRef, useState } from "react";
import "./ProfilePage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import padma from "../../images/Padma.jpg";
import Arpita from "../../images/Arpita.jpg";
import emailjs from "@emailjs/browser";

function ProfilePage() {
  const personId = useParams();
  const [data, setdata] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5n4jsp5", "template_m710k76", form.current, {
        publicKey: "W5LkSrZ67dUK3zoam",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

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
    <>
      <div className="card">
        <div className="card__item card__item--change" key={data.id}>
          <div className="card__body">
            <div className="imgbox">
              {console.log(data.id, typeof data.id)}
              <img
                src={Number(data.id) === 0 ? padma : Arpita}
                alt=""
                className="img"
              ></img>
            </div>
            <h2 className="card__title">{data.name}</h2>
            <p>{data.title}</p>
            <p>{data.emal}</p>
            <p>{`Skill Sets: ${data.skills}\n`}</p>
            <h3>EXPERIENCE</h3>
            <div>
              <ul>
                {data.experience.map((element) => {
                  return (
                    <li>
                      {`${element.company} , ${element.location}`}
                      <p>{element.Duration}</p>
                      <p>{element.description}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="userName" required></input>
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}

export default ProfilePage;
