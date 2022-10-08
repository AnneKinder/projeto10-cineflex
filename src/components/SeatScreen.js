import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seat from "./Seat.js";

export default function SeatScreen() {
  const { idSessao } = useParams;
  let [seats, setSeats] = useState([]);
  let [comprador, setComprador] = useState("");
  let [cpf, setCpf] = useState("");
  let [selectedprop, setSelectedProp] = useState([]);
  let [selectedId, setSelectedId] = useState([]);






  useEffect(() => {
    
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/10/seats`
    );

    promise.then((res) => {
      setSeats(res.data.seats);
    });

    promise.catch((err) => {
      console.log("a");
    });
  });

  function saveData() {

    let promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", 
    {id:{selectedId},
     name:{comprador},
     cpf:{cpf}})
 
    promise.then((res)=> console.log(res))
    promise.catch((err)=>err.message + "não foi") 


  }
  return (
    <SeatScreenSty>
      <PSty> Selecione o(s) assento(s) </PSty>
      <SeatGridSty>
        {seats.map((seat, i) => {
          return (
            <Seat
              key={i}
              seats={seats}
              seat={seat}
              selectedprop={selectedprop}
              setSelectedProp={setSelectedProp}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          );
        })}
      </SeatGridSty>
      <CaptionSty>
        <ItemSty colorprop="#1AAE9E" borderprop="#0E7D71">
          <div className="circle"> </div>
          <h1> Selecionado </h1>
        </ItemSty>
        <ItemSty colorprop="#C3CFD9" borderprop="#7B8B99">
          <div className="circle"> </div>
          <h1> Disponível </h1>
        </ItemSty>
        <ItemSty colorprop="#FBE192" borderprop="#F7C52B">
          <div className="circle"> </div>
          <h1> Indisponível </h1>
        </ItemSty>
      </CaptionSty>

      <BuyerSty>
        <PSty>Nome do comprador:</PSty>
        <input
          type="text"
          placeholder="     Digite seu nome..."
          onChange={(e) => setComprador(e.target.value)}
        />
      </BuyerSty>
      <BuyerSty>
        <PSty>CPF do comprador:</PSty>
        <input
          type="text"
          placeholder="     Digite seu cpf..."
          onChange={(e) => setCpf(e.target.value)}
        />
      </BuyerSty>

      <Link to="/success">
        <ReserveSty onClick={() => saveData()}>Reservar assento(s)</ReserveSty>
      </Link>
      <PreviewSty>
        <img
          src="https://sm.ign.com/ign_br/screenshot/default/enola-1_ak39.jpg"
          alt="enola"
        />
        <PSty> Filme, dia da semana, sessão </PSty>
      </PreviewSty>
    </SeatScreenSty>
  );
}

const SeatScreenSty = styled.div`
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

const SeatGridSty = styled.div`
  width: 320px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CaptionSty = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;

const ItemSty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .circle {
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.colorprop}; /*  #c3cfd9; */
    border: 1px solid ${(props) => props.borderprop};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;

    color: #4e5a65;
  }
`;

const BuyerSty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;

  & input {
    width: 327px;
    height: 51px;
    left: 24px;
    top: 497px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #afafaf;
  }
`;

const ReserveSty = styled.button`
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  border: #e8833a;
  cursor: pointer;
  margin-bottom: 100px;
  text-decoration: underline #e8833a;
`;

const PreviewSty = styled.div`
  width: 100vw;
  height: 117px;
  left: 0px;
  bottom: 0px;
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
