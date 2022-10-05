import styled from "styled-components";
import ghost from "../assets/img/ghostposter.jpg";

export default function MovieScreen() {
  return (
    <MovieScreenSty>
      <p> Selecione o filme </p>
      <ul>
        <li>
          {" "}
          <img src={ghost} alt="poster" />{" "}
        </li>
      </ul>
    </MovieScreenSty>
  );
}

const MovieScreenSty = styled.div`
  background-color: lightblue;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
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
    margin: 24px;
  }
`;
