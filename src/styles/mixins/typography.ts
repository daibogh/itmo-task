import { css, FlattenSimpleInterpolation } from "styled-components"

// SIZE
export const mixinText_56_56 = css`
  font-size: 56px;
  line-height: 56px;
`
export const mixinText_40_40 = css`
  font-size: 40px;
  line-height: 40px;
`
export const mixinText_32_38 = css`
  font-size: 32px;
  line-height: 38px;
`
export const mixinText_28_28 = css`
  font-size: 28px;
  line-height: 28px;
`
export const mixinText_18_32 = css`
  font-size: 18px;
  line-height: 32px;
`
export const mixinText_16_32 = css`
  font-size: 16px;
  line-height: 32px;
`
export const mixinText_16_24 = css`
  font-size: 16px;
  line-height: 24px;
`
export const mixinText_16_22 = css`
  font-size: 16px;
  line-height: 22px;
`
export const mixinText_12_16 = css`
  font-size: 12px;
  line-height: 16px;
`
export const mixinText_14_24 = css`
  font-size: 14px;
  line-height: 24px;
`
export const mixinText_14_19 = css`
  font-size: 14px;
  line-height: 19px;
`
export const mixinText_13_24 = css`
  font-size: 13px;
  line-height: 24px;
`
export const mixinText_13_18 = css`
  font-size: 13px;
  line-height: 18px;
`
// WEIGHT
export const mixinText_bold = css`
  font-weight: 700;
`
export const mixinText_medium = css`
  font-weight: 600; // default _reboot@mixin scss weight, add it only if necessary
`
export const mixinText_normal = css`
  font-weight: 400;
`
// COLOR
export const mixinText_black = css`
  color: #000; // default _reboot@mixin scss color, add it only if necessary
`
export const mixinText_gray = css`
  color: #222222;
`
export const mixinText_light_gray = css`
  color: #c1c3c4;
`
export const mixinText_white = css`
  color: #fff;
`
export const mixinText_blue = css`
  color: #3a51e3;
`

// VIEW

export const mixinText_ellipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const mixinText_uppercase = css`
  text-transform: uppercase;
`

export const mixinText_capitalize = css`
  text-transform: capitalize;
`

// ALIGN
export const mixinText_left = css`
  text-align: left;
`

export const mixinText_center = css`
  text-align: center;
`

export const mixinText_right = css`
  text-align: right;
`
export const mixinTextSizes: Record<TextSize, FlattenSimpleInterpolation> = {
  "56-56": mixinText_56_56,
  "40-40": mixinText_40_40,
  "32-38": mixinText_32_38,
  "28-28": mixinText_28_28,
  "18-32": mixinText_18_32,
  "16-32": mixinText_16_32,
  "16-24": mixinText_16_24,
  "16-22": mixinText_16_22,
  "14-24": mixinText_14_24,
  "14-19": mixinText_14_19,
  "13-24": mixinText_13_24,
  "13-18": mixinText_13_18,
  "12-16": mixinText_12_16,
}
export const mixinTextColors: Record<TextColor, FlattenSimpleInterpolation> = {
  white: mixinText_white,
  gray: mixinText_gray,
  "light-gray": mixinText_light_gray,
  black: mixinText_black,
  blue: mixinText_blue,
}
export const mixinTextWeights: Record<TextWeight, FlattenSimpleInterpolation> =
  {
    normal: mixinText_normal,
    medium: mixinText_medium,
    bold: mixinText_bold,
  }
export const mixinTextAligns: Record<TextAlign, FlattenSimpleInterpolation> = {
  left: mixinText_left,
  right: mixinText_right,
  center: mixinText_center,
}
