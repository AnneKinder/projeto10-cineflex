import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header.js";
import MovieScreen from "./MovieScreen";
import SessionScreen from "./SessionScreen";
import SeatScreen from "./SeatScreen";
import SuccessScreen from "./SuccessScreen";
import { useState, useEffect } from "react";


export default function Screen() {

let [dadoteste, setDadoTeste] = useState("")


  return (
    <BrowserRouter>
      <ScreenStyle>
        <Header onClick={()=>console.log(dadoteste)}/>
        <Routes>
          <Route path="/" element={<MovieScreen />} />
          <Route path="/session/:idMovie" element={<SessionScreen />} />
          <Route path="/seats/:idSessao" element={<SeatScreen />} 
          setDadoTeste={setDadoTeste}
          dadoteste={dadoteste}
          />
          <Route path="/success" element={<SuccessScreen />} />
        </Routes>
      </ScreenStyle>
    </BrowserRouter>
  );
}

const ScreenStyle = styled.div`
  background-color: lightcoral;
  width: 100vw;
  min-height: 100vh;
`;
