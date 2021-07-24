import React from "react"
import styled from "styled-components/macro"
import { Icon } from "../Icon"
import {
  mixinText_13_18,
  mixinText_13_24,
  mixinText_14_24,
  mixinText_left,
} from "../../styles/mixins/typography"
import { scRespondTo } from "../../styles/helpers/respond-to"



const Background = styled.div`
  background-color: #232473;
`
const Container = styled.div`
  display: grid;
  padding: 32px 24px 12px;
  grid-template-columns: repeat(1, minmax(auto, 304px));
  row-gap: 10px;
  ${scRespondTo.xms} {
    grid-template-columns: repeat(2, minmax(auto, 304px));
  }
  ${scRespondTo.sm} {
    padding: 32px 24px 0;
    grid-template-columns: repeat(4, minmax(auto, 304px));
  }
  column-gap: 32px;
  min-height: 240px;
  margin: 0 auto;
  max-width: 1216px;

  ${mixinText_left};
`

const FirstColumn = styled.div`
  & > *:last-child {
    margin-top: 20px;
  }
`
const Text = styled.div`
  ${mixinText_13_24};
  color: #ffffff;
  opacity: 0.5;
`
const WhiteBiggerText = styled.div`
  ${mixinText_14_24};
  color: #ffffff;
`
const SecondColumn = styled.div`
  & > *:not(:first-child) {
    margin-top: 5px;
  }
`
const ThirdColumn = styled.div`
  & > :last-child {
    margin-top: 24px;
  }
`
const SocialInfo = styled.div`
  color: #ffffff;
  ${mixinText_13_18}
`
const SocialButtons = styled.div`
  margin-top: 8px;
  width: 152px;
  display: flex;
  justify-content: space-between;
`
const StyledIcon = styled(Icon)`
  object-fit: cover;
  width: 100%;
`
const NavFooter: React.FC = () => (
  <Background>
    <Container>
      <FirstColumn>
        <StyledIcon name="logo-bottom" />
        <Text>
          Информация © 1993–2020 Университет ИТМО Разработка © 2020 Управление
          по развитию   и поддержке портала
        </Text>
      </FirstColumn>
      <SecondColumn>
        <WhiteBiggerText>Страница ректора</WhiteBiggerText>
        <WhiteBiggerText>Институты и факультеты</WhiteBiggerText>
        <WhiteBiggerText> Библиотека</WhiteBiggerText>
        <WhiteBiggerText> Издания Университета</WhiteBiggerText>
        <WhiteBiggerText> Приемная комиссия</WhiteBiggerText>
        <WhiteBiggerText> Расписание занятий</WhiteBiggerText>
      </SecondColumn>
      <SecondColumn>
        <WhiteBiggerText>Страница ректора</WhiteBiggerText>
        <WhiteBiggerText>Институты и факультеты</WhiteBiggerText>
        <WhiteBiggerText> Библиотека</WhiteBiggerText>
        <WhiteBiggerText> Издания Университета</WhiteBiggerText>
        <WhiteBiggerText> Приемная комиссия</WhiteBiggerText>
        <WhiteBiggerText> Расписание занятий</WhiteBiggerText>
      </SecondColumn>
      <ThirdColumn>
        <Text>
          г. Санкт-Петербург, Кронверкский пр., 49, ауд. 333 Тел: +7 (931)
          538-01-70 E-mail: job@corp.ifmo.ru
        </Text>
        <SocialInfo>
          Мы в соцсетях:
          <SocialButtons>
            <Icon name="vk" />
            <Icon name="fb" />
            <Icon name="twitter" />
            <Icon name="instagram" />
          </SocialButtons>
        </SocialInfo>
      </ThirdColumn>
    </Container>
  </Background>
)

export default NavFooter
