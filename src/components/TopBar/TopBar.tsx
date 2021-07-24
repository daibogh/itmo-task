import React from "react"
import styled from "styled-components/macro"
import { Icon } from "../Icon"
import { Link } from "../Link"
import { mixinText_16_32 } from "../../styles/mixins/typography"

const Container = styled.div`
  background: linear-gradient(90deg, #3951e7 20.77%, #832ab9 91.64%);
  height: 40px;
  color: white;
  padding: 0 40px;
  display: flex;
  align-items: center;
`
const RightLink = styled(Link)`
  margin-left: auto;
  height: 24px;
  display: flex;
  align-items: center;
  ${mixinText_16_32};
`
const LeftIcon = styled(Icon)`
  margin-right: auto;
  height: 16px;
  width: auto;
`
const IconWithMargin = styled(Icon)`
  margin-left: 8px;
`
const TopBar: React.FC = () => (
  <Container>
    <LeftIcon name="logo-top" />
    <RightLink href="#">
      En <IconWithMargin name="united-kingdom" />
    </RightLink>
  </Container>
)
export default TopBar
