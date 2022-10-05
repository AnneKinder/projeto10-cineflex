import styled from "styled-components";

export default function SessionScreen() {
  return (
    <SessionScreenSty>
      <div> Selecione o horário </div>
      <ul> horários </ul>
    </SessionScreenSty>
  );
}

const SessionScreenSty = styled.div`
  background-color: lightgreen;
  height: 80px;
`;
