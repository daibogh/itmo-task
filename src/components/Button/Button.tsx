import React, {  PropsWithChildren } from "react"
import styled from "styled-components/macro"
import { BackgroundColor } from "../../styles/colors"

export enum ButtonBorderRadius {
  circle = "100%",
}
export enum ButtonBorderColor {
  white = "white",
}
export enum ButtonColor {
  white = "white",
}
type ButtonProps = {
  text?: string
  borderRadius?: ButtonBorderRadius | string
  borderColor?: ButtonBorderColor
  color?: ButtonColor
  backgroundColor?: BackgroundColor
} & React.ButtonHTMLAttributes<any>
const _Button = styled.button<ButtonProps>`
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "none"};
  background-color: ${({ backgroundColor }) => backgroundColor};
  &:hover {
    cursor: pointer;
  }
`
const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => (
  <_Button type="button" {...props}>
    {children}
  </_Button>
)
export default Button
