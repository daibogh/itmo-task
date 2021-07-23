import React from "react"
import { useStateList } from "react-use"
import styled from "styled-components/macro"
import { Button } from "../Button"
import { BackgroundColor } from "../../styles/colors"
import { ButtonBorderColor, ButtonColor } from "../Button/Button"
import bg from "./bg.png"
import { Icon } from "../Icon"
import {
  mixinText_18_32,
  mixinText_56_56,
  mixinText_bold,
  mixinText_left,
  mixinText_normal,
  mixinText_white,
} from "../../styles/mixins/typography"
import { scRespondTo } from "../../styles/helpers/respond-to"

type SlideContent = {
  title: string
  description: string
  link?: string // TODO implement <a> button with this
}
type SliderProps = {
  content: SlideContent[]
}
const Background = styled.div`
  background-image: url(${bg});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 256px;
  padding: 30px 0;
  ${scRespondTo.max} {
    padding: 104px 0;
  }
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 40px auto 40px;
  column-gap: 32px;
  width: 1360px;
  height: 256px;
`
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const NavButton = styled(Button)`
  width: 40px;
  height: 40px;
  position: relative;
`
const StyledIconLeft = styled(Icon)`
  position: absolute;
  width: 10px;
  height: 16px;
  left: 46%;
  top: 52%;
  transform: translate(-50%, -50%);
`
const StyledIconRight = styled(Icon)`
  width: 10px;
  height: 16px;
  position: absolute;
  left: 53%;
  top: 52%;
  transform: translate(-50%, -50%);
`
const Title = styled.div`
  ${mixinText_56_56};
  ${mixinText_white};
  ${mixinText_bold};
  ${mixinText_left};
  margin-bottom: 32px;
`
const Description = styled.div`
  ${mixinText_18_32};
  ${mixinText_white};
  ${mixinText_normal};
  ${mixinText_left};
  margin-bottom: 24px;
  width: 60%;
`
const DetailsButton = styled(Button)`
  border: none;
  padding: 8px 24px;
  ${mixinText_18_32};
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Slider: React.FC<SliderProps> = ({ content }) => {
  const {
    state: { title, description },
    prev,
    next,
  } = useStateList(content)
  return (
    <Background>
      <Container>
        <NavContainer>
          <NavButton
            borderColor={ButtonBorderColor.white}
            borderRadius="100%"
            backgroundColor={BackgroundColor.Transparent}
            color={ButtonColor.white}
            onClick={prev}
          >
            <StyledIconLeft name="arrow-chevron-left" />
          </NavButton>
        </NavContainer>

        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <DetailsButton
            borderRadius="50px"
            color={ButtonColor.white}
            backgroundColor={BackgroundColor.Red}
          >
            Подробнее
          </DetailsButton>
        </Content>
        <NavContainer>
          <NavButton
            borderColor={ButtonBorderColor.white}
            borderRadius="100%"
            backgroundColor={BackgroundColor.Transparent}
            color={ButtonColor.white}
            onClick={next}
          >
            <StyledIconRight name="arrow-chevron-right" />
          </NavButton>
        </NavContainer>
      </Container>
    </Background>
  )
}

export default Slider
