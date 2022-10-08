import styled from "styled-components";
import { useState, useEffect } from "react";

let selected = [];
let ids = [];

export default function Seats(props) {
  const { seats, seat, setSelectedProp, setSelectedId } = props;
  let [seatColor, setSeatColor] = useState("#c3cfd9");

  function addSelected(seatNumber) {
    selected.push(seatNumber);

    setSelectedProp(selected);
  }

  function remSelected(seatNumber) {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] === seatNumber) {
        selected.splice(i, 1);
      }
    }
    setSelectedProp(selected);
  }

  function addId(seatId){
    ids.push(seatId);
    setSelectedId(ids);
    console.log(ids)
  }

  function remId(seatId){
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] === seatId) {
        ids.splice(i, 1);
      }
    }
    setSelectedProp(ids);
    console.log(ids)
  }

  useEffect(() => {
    if (seat.isAvailable === false) {
      setSeatColor("#FBE192");
    }
    if (seat.isAvailable === true) {
      setSeatColor("#c3cfd9");
    }
  }, []);

  function checkSeat(seatNumber, seatId) {
    if (seatColor === "#c3cfd9") {
      addSelected(seatNumber);
      addId(seatId)
      setSeatColor("#1AAE9E");
    }

    if (seatColor === "#1AAE9E") {
      //ta verde -> vai pra cinza
      remSelected(seatNumber);
      remId(seatId)
      setSeatColor("#c3cfd9");
    }
    if (seatColor === "#FBE192") {
      //amarelo
      alert("Assento indisponível.");
    }
  }

  return (
    <div data-identifier="seat">
    <SeatSty
      colorprop={seatColor}
      onClick={() => checkSeat(seat.name, seat.id)}
    >
      {" "}
      {seat.name}{" "}
    </SeatSty>
    </div>
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
