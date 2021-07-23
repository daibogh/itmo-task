import React from "react"
import { Slider } from "../../components/Slider"
import { TopBar } from "../../components/TopBar"
import { NavBar } from "../../components/NavBar"

const Header: React.FC = () => (
  <div>
    <TopBar />
    <NavBar />
    <Slider
      content={[
        {
          title: "Началась подача документов",
          description:
            "Программа предполагает углубленное изучение вопросов, связанных с проектированием, исследованием, производством и эксплуатацией мехатронных и робототехнических систем и комплексов.",
        },
        {
          title: "Продолжается подача документов",
          description:
            "Программа предполагает углубленное изучение вопросов, связанных с проектированием, исследованием, производством и эксплуатацией мехатронных и робототехнических систем и комплексов.",
        },
        {
          title: "Закончилась подача документов",
          description: "Ты опоздал",
        },
      ]}
    />
  </div>
)
export default Header
