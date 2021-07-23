import React from "react"
import styled from "styled-components/macro"
import { useBoolean } from "react-use"

const _Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const FullImage = styled(_Image)`
  transition: opacity 400ms ease 0ms;
`
const ThumbImage = styled(_Image)`
  filter: blur(5px);
  transform: scale(1);
  transition: visibility 0ms ease 400ms;
`
type ImageProps = {
  alt: string
  thumb: string
  src: string
}
const Image: React.FC<ImageProps> = ({ alt, thumb, src }) => {
  const [isLoaded, setLoaded] = useBoolean(false)
  return (
    <>
      <ThumbImage
        alt={alt}
        src={thumb}
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      />
      <FullImage
        onLoad={setLoaded}
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={alt}
        src={src}
      />
    </>
  )
}
export default Image
