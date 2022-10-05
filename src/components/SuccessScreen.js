import styled from "styled-components";

export default function SuccessScreen() {
  return (
    <SuccessScreenSty>
      <div> Pedido feito com sucesso! </div>
      <div> Filmes e sessão </div>
      <div> Ingressos </div>
      <div> Comprador </div>
      <button> Voltar para Home </button>
    </SuccessScreenSty>
  );
}

const SuccessScreenSty = styled.div`
  background-color: lightpink;
`;
