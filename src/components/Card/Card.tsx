import React  from "react"
import styled from "styled-components/macro"
import { format, parseISO } from "date-fns"
import { ru } from "date-fns/locale"
import { scRespondTo } from "../../styles/helpers/respond-to"
import {
  mixinText_12_16,
  mixinText_16_24,
  mixinText_uppercase,
} from "../../styles/mixins/typography"
import { Icon } from "../Icon"
import { Image } from "../Image"
import { NewsPayload } from "../../hooks/api/useNews"
import { Link } from "../Link"

type CardProps = NewsPayload
const CardContainer = styled.div`
  width: calc(100% - 16px);
  margin: 0 8px;
  ${scRespondTo.sm} {
    width: 364px;
    margin: 0;
  }
  ${scRespondTo["pre-md"]} {
    width: 384px;
  }
  height: auto;
  background: #ffffff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  position: relative;
`
const ImageWrapper = styled.div`
  height: 224px;
  width: 100%;
  position: relative;
  & > * {
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`
const CardContent = styled.div`
  padding: 32px;
`
const CardInfo = styled.div`
  height: 18px;
  color: #6a6a6a;
  ${mixinText_12_16};
  display: flex;
  align-items: center;
`
const PostDate = styled.div`
  ${mixinText_uppercase};
  margin-right: auto;
`
const SocialInfo = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`
const VKIcon = styled(Icon)`
  margin-right: 8px;
  width: 16px;
  height: auto;
`
const Description = styled.div`
  margin-top: 16px;
  ${mixinText_16_24};
`
const AbsoluteLink = styled(Link)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const Card: React.FC<CardProps> = ({
  url,
  image_big,
  image_small,
  title,
  date,
}) => (
  <CardContainer>
    <ImageWrapper>
      <Image alt="image" thumb={image_small} src={image_big} />
    </ImageWrapper>
    <CardContent>
      <CardInfo>
        <PostDate>
          {format(parseISO(date), "dd MMMM yyyy", {
            locale: ru,
          })}
        </PostDate>
        <SocialInfo>
          <VKIcon name="vk-no-bg" />
          <div>Вконтакте</div>
        </SocialInfo>
      </CardInfo>
      <Description>{title}</Description>
    </CardContent>
    <AbsoluteLink href={url} rel="noopener nofollow" target="_blank" />
  </CardContainer>
)
export default Card
