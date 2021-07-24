import styled from "styled-components/macro"
import React, { useCallback } from "react"
import { useAtom } from "@reatom/react"
import mapImg from "./yandex-map.png"
import {
  mixinText_16_22,
  mixinText_40_40,
  mixinText_bold,
  mixinText_left,
  mixinText_normal,
} from "../../styles/mixins/typography"
import { Link } from "../Link"
import { Button } from "../Button"
import { Icon } from "../Icon"
import { BackgroundColor } from "../../styles/colors"
import { ButtonColor } from "../Button/Button"
import { scRespondTo } from "../../styles/helpers/respond-to"
import { modalStateAtom } from "../../store/modal-state"

const EmailButton = styled(Button)`
  padding: 9px 24px;
  width: 186px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  ${mixinText_16_22};
`
const Background = styled.div`
  background: url(${mapImg});
  background-size: cover;
  width: 100vw;
  height: 400px;
  position: relative;
`
const InfoContainer = styled.div`
  position: absolute;
  padding: 40px 72px;
  width: 100%;
  color: #222222;
  background: #ffffff;
  border-radius: 8px;
  ${mixinText_left};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${scRespondTo.xms} {
    width: 480px;
    height: 296px;
  }
  ${scRespondTo.sm} {
    transform: none;
    top: 60px;
    left: 211px;
  }
`
const Title = styled.div`
  ${mixinText_40_40};
  ${mixinText_bold};
`
const Address = styled.div`
  ${mixinText_16_22};
  ${mixinText_normal};
  margin-top: 16px;
`
const Phone = styled.div`
  ${mixinText_16_22};
  ${mixinText_normal};
  margin-top: 12px;
  margin-bottom: 24px;
`
const PhoneLink = styled(Link)`
  color: #3951e7;
`
const MapInfo: React.FC = () => {
  const setModalState = useAtom(modalStateAtom)[1].setModalState
  const openFormModal = useCallback(
    () => setModalState("form"),
    [setModalState]
  )
  return (
    <Background>
      <InfoContainer>
        <Title>Контакты</Title>
        <Address>
          г. Санкт-Петербург, Кронверкский пр-т, д.49, ауд. 155 (вход со стороны
          ул. Сытнинской)
        </Address>
        <Phone>
          Тел: <PhoneLink href="tel:+79315380170">+7 (931) 538-01-70</PhoneLink>
        </Phone>
        <EmailButton
          onClick={openFormModal}
          backgroundColor={BackgroundColor.Red}
          color={ButtonColor.white}
        >
          <Icon name="email" />
          Написать нам
        </EmailButton>
      </InfoContainer>
    </Background>
  )
}
export default MapInfo
