import React from "react"
import MapInfo from "../../components/MapInfo/MapInfo"
import { NavFooter } from "../../components/NavFooter"
import { DomainInfo } from "../../components/DomainInfo"

const Footer: React.FC = () => (
  <div>
    <MapInfo />
    <NavFooter />
    <DomainInfo />
  </div>
)

export default Footer
