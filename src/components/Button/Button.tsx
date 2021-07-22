import React from "react";
import styled from 'styled-components/macro'
export enum ButtonBorderRadius {
    circle = '100%'
}
export enum ButtonBorderColor {
    white = 'white'
}
export enum ButtonColor {
    white = 'white'
}
type ButtonProps = {
    text?: string
    borderRadius?: ButtonBorderRadius
    borderColor?: ButtonBorderColor
    color?: ButtonColor
    backgroundColor?: BackgroundColor
}
const _Button = styled.button<ButtonProps>`
    color: ${({color}) => color};
    border-radius: ${({borderRadius}) => borderRadius};
    border: ${({borderColor}) => `1px solid ${borderColor}`};
    background-color: ${({backgroundColor}) => backgroundColor};
`
const Button: React.FC<ButtonProps> = ({text, ...props}) => {
    return <_Button {...props} type='button'>{text}</_Button>
}
export default Button
