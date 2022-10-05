import styled from "styled-components";
import Header from "./Header.js";
import MovieScreen from "./MovieScreen";
import SessionScreen from "./SessionScreen";
import SeatScreen from "./SeatScreen";
import SuccessScreen from "./SuccessScreen";

export default function Screen() {
  return (
    <ScreenStyle>
      <Header />
      <MovieScreen />
      {/* <SessionScreen />
      <SeatScreen />
      <SuccessScreen /> */}
    </ScreenStyle>
  );
}

const ScreenStyle = styled.div`
  background-color: lightcoral;
  width: 100vw;
  min-height: 100vh;
`;
