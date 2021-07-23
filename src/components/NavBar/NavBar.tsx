import React from "react"
import styled from "styled-components/macro"
import {
  mixinText_12_16,
  mixinText_14_24,
  mixinText_16_24,
  mixinText_28_28,
  mixinText_bold,
  mixinText_normal,
} from "../../styles/mixins/typography"
import { Icon } from "../Icon"
import { scRespondTo } from "../../styles/helpers/respond-to"
import { Link } from "../Link"

const Container = styled.div`
  height: 64px;
  display: flex;
  padding: 0 40px;
  color: #222222;
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
  ${mixinText_28_28};
  ${mixinText_bold};
  margin-left: 16px;
`
const RightItem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  column-gap: 40px;
  ${mixinText_12_16};
  ${scRespondTo.max} {
    ${mixinText_16_24};
  }

  ${mixinText_normal};
  align-items: center;
  overflow: hidden;
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
  </Container>
)
export default NavBar
