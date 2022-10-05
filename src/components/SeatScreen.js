import styled from "styled-components";

export default function SeatScreen() {
  return (
    <SeatScreenSty>
      <div> Selecione o(s) assento(s) </div>
      <ul> assentos </ul>
    </SeatScreenSty>
  );
}

const SeatScreenSty = styled.div`
  background-color: lightgoldenrodyellow;
  height: 80px;
`;
