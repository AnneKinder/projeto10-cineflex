import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SuccessScreen() {
  return (
    <SuccessScreenSty>
      <PSty colorprop="#247A6B"> Pedido feito com sucesso! </PSty>
      <PSty> Filmes e sessão </PSty>
      <H1> filme, dia da semana, hora</H1>
      <PSty> Ingressos </PSty>
      <H1>assentos</H1>
      <PSty> Comprador </PSty>
      <H1>nome e cpf</H1>
      <Link to="/">
        <HomeSty> Voltar para Home </HomeSty>
      </Link>
    </SuccessScreenSty>
  );
}

const SuccessScreenSty = styled.div`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PSty = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${(props) => props.colorprop};
  margin: 30px;
`;

const H1 = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #293845;
`;

const HomeSty = styled.button`
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
  margin-top: 65px;
  margin-bottom: 100px;
  text-decoration: underline #e8833a;
`;
