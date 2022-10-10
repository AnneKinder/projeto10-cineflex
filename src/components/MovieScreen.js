import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MovieScreen() {
  let [banners, setBanners] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((res) => setBanners(res.data));
    promise.catch((err) => console.log("oops"));
  }, []);

  return (
    <MovieScreenSty>
      <p> Selecione o filme </p>
      <BannerGrid>
        {banners.map((banner, i) => (
          <div key={i}>
            <Link to={`/session/${banner.id}`}>
              <BannerSty>
                <img src={banner.posterURL} alt="poster" />
              </BannerSty>
            </Link>
          </div>
        ))}
      </BannerGrid>
    </MovieScreenSty>
  );
}

const MovieScreenSty = styled.div`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
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
    margin: 24px;
  }
`;

const BannerGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 375px;
  align-items: center;
  text-align: center;
  margin-left: 70px;
`;

const BannerSty = styled.li`
  width: 145px;
  height: 209px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 4px;

  img {
    width: 129px;
    height: 193px;
    margin-top: 6px;
  }
`;
