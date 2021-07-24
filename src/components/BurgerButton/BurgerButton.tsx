import React from "react"
import styled from "styled-components/macro"
import { useAtom } from "@reatom/react"
import { isOpenedBurgerAtom } from "../../store/burger-state"
import { BackgroundColor } from "../../styles/colors"

const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  margin-right: 20px;
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :focus {
    border: medium none rgb(111, 255, 176);
    box-shadow: rgb(111, 255, 176) 0 0 2px 2px;
    outline: 0;
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(8px, 10px);
      width: 24px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(5px, -6px);
      width: 24px;
    }
  }
`

const Bar = styled.span`
  display: block;
  width: 24px;
  height: 3px;
  margin-bottom: 7px;
  background-color: ${BackgroundColor.Blue};
`

const BurgerButton = () => {
  const [isMenuOpen, { toggle }] = useAtom(isOpenedBurgerAtom)

  const clickHandler = () => {
    toggle({})
  }

  return (
    <MenuButton
      className={isMenuOpen ? "active" : ""}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  )
}

export default BurgerButton
