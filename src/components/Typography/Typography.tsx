import React, {PropsWithChildren} from "react";
import styled from "styled-components/macro";
import {
    mixinText_capitalize,
    mixinText_ellipsis,
    mixinText_uppercase,
    mixinTextAligns,
    mixinTextColors,
    mixinTextSizes,
    mixinTextWeights
} from "../../styles/mixins/typography";
type TypographyProps = {
    color?: TextColor;
    weight?: TextWeight;
    size?: TextSize;
    align?: TextAlign
    uppercase?: boolean;
    capitalize?: boolean;
    ellipsis?: boolean;
}
const _Typography = styled.span<TypographyProps>`
  ${({weight}) => weight && mixinTextWeights[weight]};
  ${({size}) => size && mixinTextSizes[size]};
  ${({align}) => align && mixinTextAligns[align]};
  ${({color}) => color && mixinTextColors[color]};
  ${({uppercase}) => uppercase && mixinText_uppercase};
  ${({ellipsis}) => ellipsis && mixinText_ellipsis};
  ${({capitalize}) => capitalize && mixinText_capitalize};
  
`
const Typography:React.FC<PropsWithChildren<TypographyProps>> = ({children,...props}) => {
    return <_Typography {...props} >{children}</_Typography>
}
export default Typography
