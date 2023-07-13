import styled from 'styled-components'

import trapezoidImg from '../../assets/img/logo-trapezoid.svg'

import { theme } from '../../theme'

const { colors: { black, whiteColor }, gradientOne, gradientTwo, shadow, textShadow } = theme

export const SHeader = styled.header`
    position: fixed;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 6vh;
    width: calc(100vw - (100vw - 100%));
    background: linear-gradient(${gradientOne}), linear-gradient(${gradientTwo}), ${black};
    box-shadow: ${shadow};
    z-index: 20;
`

export const SLinkLogo = styled.a`
    display: flex;
    justify-content: center;
    width: 20vw;
    height: 10vh;
    line-height: 7vh;
    position: absolute;
    font-family: Open Sans;
    text-align: center;
    color: ${whiteColor};
    font-size: 1.5vmax;
    font-weight: 600;
    text-shadow: ${textShadow};
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: url(${trapezoidImg}) 0 0/100% no-repeat;
`

export const SNavUl = styled.ul`
    margin-right: 40px !important; 
    display: flex;
    gap: 1.6vh;
`