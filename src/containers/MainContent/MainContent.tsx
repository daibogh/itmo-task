import React from "react"
import styled from "styled-components/macro"
import { scRespondTo } from "../../styles/helpers/respond-to"
import {
  mixinText_28_28,
  mixinText_40_40,
  mixinText_bold,
  mixinText_center,
  mixinText_left,
} from "../../styles/mixins/typography"
import { Card } from "../../components/Card"
import Accordeon from "../../components/Accordeon/Accordeon"
import { useNews } from "../../hooks/api/useNews"

const Container = styled.div`
  ${scRespondTo.w800} {
    width: 800px;
  }

  ${scRespondTo["pre-max"]} {
    width: 1216px;
  }

  margin: 80px auto 0;
`
const Title = styled.div`
  ${mixinText_28_28};
  ${mixinText_bold};
  ${mixinText_left};
  ${mixinText_center};
  margin-bottom: 40px;
  color: #222222;
  ${scRespondTo.sm} {
    ${mixinText_left};
    ${mixinText_40_40};
  }
`
const NewsContainer = styled.div`
  display: grid;
  ${scRespondTo.w800} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${scRespondTo["pre-max"]} {
    grid-template-columns: repeat(3, 1fr);
  }
  column-gap: 32px;
  row-gap: 40px;
`
const CenteredTitle = styled(Title)`
  margin-top: 40px;
  text-align: center;
`
const AccordeonsContainer = styled.div`
  max-width: 592px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  & > *:not(:first-child) {
    margin-top: 8px;
  }
`
const MainContent: React.FC = () => {
  const news = useNews()
  return (
    <Container>
      <Title>Новости и события</Title>
      <NewsContainer>
        {news && news.map((data) => <Card key={data.id} {...data} />)}
      </NewsContainer>
      <CenteredTitle>Дисциплины</CenteredTitle>
      <AccordeonsContainer>
        <Accordeon />
        <Accordeon />
        <Accordeon />
        <Accordeon />
        <Accordeon />
      </AccordeonsContainer>
    </Container>
  )
}
export default MainContent
