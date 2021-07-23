import React from "react"
import styled from "styled-components/macro"

type LinkProps = {} & Pick<React.HTMLProps<HTMLLinkElement>, "href">
const _Link = styled.a`
  &,
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`
const Link: React.FC<React.PropsWithChildren<LinkProps>> = (props) => (
  <_Link {...props} />
)
export default Link
