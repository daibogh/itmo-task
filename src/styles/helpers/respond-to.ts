/* eslint-disable prettier/prettier */
import { css } from 'styled-components'

const BREAKPOINTS = {
    xs: 320,
    s: 360,
    w375: 375,
    w387: 387,
    w400: 400,
    ms: 480,
    xms: 640,
    'pre-sm': 760,
    sm: 768,
    w800: 800,
    'pre-md': 1024,
    md: 1030,
    w1044: 1044,
    'pre-max': 1360,
    laptop: 1440,
    lg: 1460,
    max: 1460,
    xl: 1920
}
const breakpointsKeys = Object.keys(BREAKPOINTS)
export const scRespondTo:any = breakpointsKeys.reduce((accumulator: any, label) => {
    accumulator[label] = css`
    // eslint-disable-next-line prettier/prettier
    @media (min-width: ${(BREAKPOINTS as any)[label]}px)
    `
    return accumulator
}, {}) as { [key: string]: typeof css }

