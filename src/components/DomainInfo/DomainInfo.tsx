import React from "react"
import styled from "styled-components/macro"
import {
  mixinText_13_18,
  mixinText_left,
  mixinText_normal,
} from "../../styles/mixins/typography"
import { scRespondTo } from "../../styles/helpers/respond-to"

const Background = styled.div`
  background-color: #1a1b57;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  flex-direction: column;
  ${scRespondTo.sm} {
    padding: 10px 209px;
    flex-direction: row;
  }
  ${scRespondTo.max} {
    padding: 10px 409px;
  }
`
const Text = styled.div`
  ${mixinText_normal};
  ${mixinText_13_18};
  ${mixinText_left};
  color: #ffffff;
  opacity: 0.5;
`
const DomainInfo: React.FC = () => (
  <Background>
    <Text>Правила использования информации в доменной зоне ifmo.ru </Text>
    <Text>Политика по обработке Персональных данных</Text>
  </Background>
)
export default DomainInfo
