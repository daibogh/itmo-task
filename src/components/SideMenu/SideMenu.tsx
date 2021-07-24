import React, { PropsWithChildren } from "react"
import styled, { css } from "styled-components"
import { useAtom } from "@reatom/react"
import { isOpenedBurgerAtom } from "../../store/burger-state"

const Menu = styled.nav<{ open: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  max-width: 100%;
  margin-top: 0px;
  padding: 100px 12px 12px 12px;
  align-items: stretch;
  background-color: #232473;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`

const SideMenu: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isOpened] = useAtom(isOpenedBurgerAtom)

  return <Menu open={isOpened}>{children}</Menu>
}
export default SideMenu
