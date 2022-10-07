import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SessionScreen() {
  const { idMovie } = useParams();
  let [ses, setSes] = useState([]);
  let [days, setDays] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`
    );

    promise.then((res) => {
      setSes(res.data);
      setDays(res.data.days);
    });
    promise.catch((err) => console.log("oops"));
  }, []);

  return (
    <SessionScreenSty>
      <PSty> Selecione o horário </PSty>

      {days.map((day, i) => (
        <div key={i}>
          <DaySty>
            {" "}
            {day.weekday} - {day.date}
          </DaySty>
          <HourContainerSty>
            <Link to={`/seats/${day.showtimes[0].id}`}>
              <HourSty>{day.showtimes[0].name}</HourSty>
            </Link>
            <Link to={`/seats/${day.showtimes[0].id}`}>
              <HourSty>{day.showtimes[1].name}</HourSty>
            </Link>
          </HourContainerSty>
        </div>
      ))}
      <PreviewSty>
        <img src={ses.posterURL} alt="enola" />
        <PSty> {ses.title}</PSty>
      </PreviewSty>
    </SessionScreenSty>
  );
}

const SessionScreenSty = styled.div`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PSty = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #293845;
  margin: 30px;
`;

const DaySty = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #293845;
  margin-bottom: 22px;
`;

const HourContainerSty = styled.div`
  width: 250px;
  display: flex;
  margin-bottom: 23px;
  margin-left: 20px;
`;

const HourSty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: white;
  background-color: #e8833a;
  width: 83px;
  height: 43px;
  left: 115px;
  top: 351px;
  border-radius: 3px;
  margin-right: 10px;
  text-decoration: underline #e8833a;
`;

const PreviewSty = styled.div`
  width: 100vw;
  height: 117px;
  left: 0px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    height: 90px;
    border: 9px white solid;
  }
`;
