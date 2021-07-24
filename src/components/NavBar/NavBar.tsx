import React from "react"
import styled from "styled-components/macro"
import {
  mixinText_12_16,
  mixinText_16_24,
  mixinText_28_28,
  mixinText_bold,
  mixinText_normal,
} from "../../styles/mixins/typography"
import { Icon } from "../Icon"
import { scRespondTo } from "../../styles/helpers/respond-to"
import { Link } from "../Link"
import BurgerButton from "../BurgerButton/BurgerButton"
import { SideMenu } from "../SideMenu"

const Container = styled.div`
  height: 64px;
  display: flex;
  color: #222222;
  ${scRespondTo.sm} {
    padding: 0 40px;
  }
  ${scRespondTo.max} {
    height: 86px;
  }
`
const LeftItem = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
`
const Title = styled.div`
  ${mixinText_16_24};
  ${scRespondTo.sm} {
    ${mixinText_28_28};
  }
  ${mixinText_bold};
  margin-left: 16px;
`
const RightItem = styled.div`
  display: none;
  grid-template-columns: repeat(5, auto);
  column-gap: 40px;
  ${mixinText_12_16};
  ${scRespondTo.sm} {
    display: grid;
  }
  ${scRespondTo.max} {
    ${mixinText_16_24};
  }

  ${mixinText_normal};
  align-items: center;
  overflow: hidden;
`
const AdaptiveBurgerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${scRespondTo.sm} {
    display: none;
  }
`
const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  opacity: 0.5;
  & > * {
    margin-top: 5px;
  }
`
const NavBar: React.FC = () => (
  <Container>
    <LeftItem>
      <Icon name="logo-back" />
      <Title>Лаборатория робототехники </Title>
    </LeftItem>
    <RightItem>
      <Link href="#">О лаборатории</Link>
      <Link href="#">Учебная деятельность</Link>
      <Link href="#">Научная деятельность</Link>
      <Link href="#">Новости</Link>
      <Link href="#">Контакты</Link>
    </RightItem>
    <AdaptiveBurgerButton>
      <BurgerButton />
    </AdaptiveBurgerButton>
    <SideMenu>
      <LinksContainer>
        <Link href="#">О лаборатории</Link>
        <Link href="#">Учебная деятельность</Link>
        <Link href="#">Научная деятельность</Link>
        <Link href="#">Новости</Link>
        <Link href="#">Контакты</Link>
      </LinksContainer>
    </SideMenu>
  </Container>
)
export default NavBar
