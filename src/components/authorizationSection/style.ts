import styled from 'styled-components'

import authorizationBG from '../../assets/img/authorizationBG.jpg'

import { theme } from '../../theme'

const { colors: { black }, gradientOne, gradientTwo, shadow } = theme

export const SAuthLayoutSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url(${authorizationBG}) center center/cover no-repeat;
    z-index: 10;
`

export const SSpanLeft = styled.span`
    position: absolute;
    left: 0;
    width: 30px;
    height: 100vh;
    background: linear-gradient(to left, ${gradientOne}), linear-gradient(to left,  ${gradientTwo}), ${black};
    box-shadow: ${shadow};
    z-index: 30;
`

export const SSpanRight = styled.span`
    position: absolute;
    right: 0;
    width: 30px;
    height: 100vh;
    background: linear-gradient(to right, ${gradientOne}), linear-gradient(to right,  ${gradientTwo}), ${black};
    box-shadow: ${shadow};
    z-index: 30;
`
export const SSpanBottom = styled.span`
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 3vh;
    background: linear-gradient(${gradientOne}), linear-gradient(${gradientTwo}), ${black};
    box-shadow: ${shadow};
`