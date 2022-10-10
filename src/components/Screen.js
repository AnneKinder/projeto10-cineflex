import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header.js";
import MovieScreen from "./MovieScreen";
import SessionScreen from "./SessionScreen";
import SeatScreen from "./SeatScreen";
import SuccessScreen from "./SuccessScreen";
import { useState, useEffect } from "react";

export default function Screen() {
  let [nomeDoFilme, setNomeDoFilme] = useState("nomeDoFilme");
  let [nomeDoDia, setNomeDoDia] = useState("nomeDoDia");
  let [horaDoFilme, setHoraDoFilme] = useState("horaDoFilme");
  let [nomeDoAssento, setNomeDoAssento] = useState("nomeDoAssento");
  let [nomeDoComprador, setNomeDoComprador] = useState("nomeDoComprador");
  let [cpfDoComprador, setCpfDoComprador] = useState("cpfDoComprador");

  // const {nomeDoFilme, setNomeDoFilme,nomeDoDia, setNomeDoDia, horaDoFilme, setHoraDoFilme, nomeDoAssento, setNomeDoAssento, nomeDoComprador, setNomeDoComprador, cpfDoComprador, setCpfDoComprador } = props

  return (
    <BrowserRouter>
      <ScreenStyle>
        <Header />
        <Routes>
          <Route path="/" element={<MovieScreen />} />
          <Route path="/session/:idMovie" element={<SessionScreen />} />
          <Route
            path="/seats/:idSessao"
            element={
              <SeatScreen
                nomeDoFilme={nomeDoFilme}
                setNomeDoFilme={setNomeDoFilme}
                setNomeDoDia={setNomeDoDia}
                setHoraDoFilme={setHoraDoFilme}
                setNomeDoAssento={setNomeDoAssento}
                setNomeDoComprador={setNomeDoComprador}
                setCpfDoComprador={setCpfDoComprador}
              />
            }
          />
          <Route
            path="/success"
            element={
              <SuccessScreen
                nomeDoFilme={nomeDoFilme}
                nomeDoDia={nomeDoDia}
                horaDoFilme={horaDoFilme}
                nomeDoAssento={nomeDoAssento}
                nomeDoComprador={nomeDoComprador}
                cpfDoComprador={cpfDoComprador}
              />
            }
          />
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
