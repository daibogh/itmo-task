import styled from "styled-components/macro"
import React from "react"
import mapImg from "./yandex-map.png"

const Background = styled.div`
  background: url(${mapImg});
  background-size: cover;
  width: 100vw;
  height: 320px;
`
const MapInfo: React.FC = () => (
  <Background>
    <div>наша точка</div>
  </Background>
)
export default MapInfo
