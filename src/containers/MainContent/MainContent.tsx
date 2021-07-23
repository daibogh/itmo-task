import React from "react"
import styled from "styled-components/macro"
import { scRespondTo } from "../../styles/helpers/respond-to"
import {
  mixinText_40_40,
  mixinText_bold,
  mixinText_left,
} from "../../styles/mixins/typography"
import { Card } from "../../components/Card"
import Accordeon from "../../components/Accordeon/Accordeon"

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
  ${mixinText_40_40};
  ${mixinText_bold};
  ${mixinText_left};
  margin-bottom: 40px;
  color: #222222;
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
const MainContent: React.FC = () => (
  <Container>
    <Title>Новости и события</Title>
    <NewsContainer>
      <Card
        id={1}
        title=""
        image_small=""
        image_big=""
        date={new Date()}
        url=""
        lead=""
      />
      <Card
        id={1}
        title=""
        image_small=""
        image_big=""
        date={new Date()}
        url=""
        lead=""
      />
      <Card
        id={1}
        title=""
        image_small=""
        image_big=""
        date={new Date()}
        url=""
        lead=""
      />
      <Card
        id={1}
        title=""
        image_small=""
        image_big=""
        date={new Date()}
        url=""
        lead=""
      />
      <Card
        id={1}
        title=""
        image_small=""
        image_big=""
        date={new Date()}
        url=""
        lead=""
      />
      <Card
        id={1}
        title=""
        image_small=""
        image_big=""
        date={new Date()}
        url=""
        lead=""
      />
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
export default MainContent
