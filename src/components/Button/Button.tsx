import React, { HTMLAttributes, PropsWithChildren } from "react"
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
} & HTMLAttributes<HTMLButtonElement>
const _Button = styled.button<ButtonProps>`
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ borderColor }) => borderColor && `1px solid ${borderColor}`};
  background-color: ${({ backgroundColor }) => backgroundColor};
`
const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => (
  <_Button {...props} type="button">
    {children}
  </_Button>
)
export default Button
