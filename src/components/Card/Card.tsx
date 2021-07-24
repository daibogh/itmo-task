import React from "react"
import styled from "styled-components/macro"
import { scRespondTo } from "../../styles/helpers/respond-to"
import {
  mixinText_12_16,
  mixinText_16_24,
  mixinText_uppercase,
} from "../../styles/mixins/typography"
import { Icon } from "../Icon"
import { Image } from "../Image"

type CardProps = {
  id: number // Идентификатор новости
  title: string // Название новости
  image_small: string // Обложка новости
  image_big: string // - Оригинал картинки новости
  date: Date // - Дата публикации
  url: string // - Ссылка на новость
  lead: string // - Текст превью новости
}
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
const Card: React.FC<CardProps> = (props) => (
  <CardContainer>
    <ImageWrapper>
      <Image
        alt="image"
        thumb="https://news.itmo.ru/images/news/small/p10485.jpg"
        src="https://news.itmo.ru/images/news/big/p10485.jpg"
      />
    </ImageWrapper>
    <CardContent>
      <CardInfo>
        <PostDate>2 декабря 2019</PostDate>
        <SocialInfo>
          <VKIcon name="vk-no-bg" />
          <div>Вконтакте</div>
        </SocialInfo>
      </CardInfo>
      <Description>
        Физарум//Перформер, 2019, Bioroboty019 это мультимедийный перформанс о
        связи человеческого и нечеловеческого, представленный на Кураторском
        форуме в Молодёжный...
      </Description>
    </CardContent>
  </CardContainer>
)
export default Card
