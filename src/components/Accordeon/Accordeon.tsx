import React from "react"
import styled from "styled-components/macro"
import { useToggle } from "react-use"
import { Icon } from "../Icon"
import {
  mixinText_14_24,
  mixinText_16_24,
  mixinText_medium,
  mixinText_normal,
} from "../../styles/mixins/typography"

type AccordeonProps = {}
const CardContainer = styled.div`
  padding: 24px 32px;
  color: #222222;
  border: 1px solid #eaeffc;
  border-radius: 8px;
`
const CardHeader = styled.div`
  display: flex;
  ${mixinText_16_24};
  ${mixinText_medium};
  &:hover {
    cursor: pointer;
  }
`
const CardIcon = styled(Icon)<{ isOpened: boolean }>`
  margin-left: auto;
  transform: ${({ isOpened }) => (isOpened ? "rotate(180deg)" : "none")};
  transition: transform 400ms;
`
const CardDetails = styled.div<{ isOpened: boolean }>`
  ${mixinText_14_24};
  ${mixinText_normal};
  margin-top: ${({ isOpened }) => (isOpened ? "16px" : 0)};
  transition: max-height, margin 400ms;
  max-height: ${({ isOpened }) => (isOpened ? "192px" : 0)};
  overflow: hidden;
`
const Accordeon: React.FC<AccordeonProps> = (props) => {
  const [isOpened, toggle] = useToggle(false)
  return (
    <CardContainer>
      <CardHeader onClick={toggle}>
        Робототехника <CardIcon isOpened={isOpened} name="arrow-chevron-down" />
      </CardHeader>
      <CardDetails isOpened={isOpened}>
        Содержание дисциплины охватывает круг вопросов, связанных с элементной
        базой систем автоматического управления и, в частности, измерительными
        преобразователями информации. Рассматриваются вопросы, связанные с
        конструктивными и схемными решениями современных измерительных
        преобразователей параметрического и генераторного типа, их основные
        характеристики и требования, предъявляемые к ним, как элементам систем
        автоматики.
      </CardDetails>
    </CardContainer>
  )
}

export default Accordeon
