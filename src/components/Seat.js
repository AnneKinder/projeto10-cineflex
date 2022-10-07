import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Seats(props) {
  const { seats, seat, i } = props;
  let [seatColor, setSeatColor] = useState("#c3cfd9");
  let [selected, setSelected] = useState([]);

  useEffect(() => {
    if (seat.isAvailable === false) {
      setSeatColor("#FBE192");
    }
    if (seat.isAvailable === true) {
      setSeatColor("#c3cfd9");
    }
  }, []);

  function checkSeat(seatNumber) {
    if (seatColor === "#c3cfd9") {
      //ta cinza -> vai pra verde
      setSeatColor("#1AAE9E");
    }

    if (seatColor === "#1AAE9E") {
      //ta verde -> vai pra cinza
      setSeatColor("#c3cfd9");
    }
    if (seatColor === "#FBE192") {
      //amarelo
      alert("Assento indisponível.");
    }
  }

  return (
    <SeatSty colorprop={seatColor} onClick={() => checkSeat(seat.name)}>
      {" "}
      {seat.name}{" "}
    </SeatSty>
  );
}

const SeatSty = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${(props) => props.colorprop};
  border-radius: 50%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #000000;
  border: 1px solid #808f9d;
  margin: 3px;
  cursor: pointer;
`;
