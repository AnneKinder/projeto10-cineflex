import styled from "styled-components";

export default function Header() {
  return <HeaderStyle> CINEFLEX </HeaderStyle>;
}

const HeaderStyle = styled.div`
  background-color: #c3cfd9;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #e8833a;
`;
