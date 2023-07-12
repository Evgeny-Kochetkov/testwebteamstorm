import styled from 'styled-components'

import { theme } from '../../theme'

const { colors: { black, whiteColor }, gradientOne, gradientTwo, shadow, textShadow } = theme

export const SHeader = styled.header`
    position: fixed;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 60px;
    width: calc(100vw - (100vw - 100%));
    background: linear-gradient(${gradientOne}), linear-gradient(${gradientTwo}), ${black};
    box-shadow: ${shadow};
    z-index: 20;
`

export const SLogo = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`

export const SLinkLogo = styled.a`
    position: absolute;
    margin-top: 25px;
    font-family: Open Sans;
    text-align: center;
    color: ${whiteColor};
    font-size: 30px;
    font-weight: 600;
    text-shadow: ${textShadow};
    left: 50%;
    transform: translateX(-50%);
`

export const SNavUl = styled.ul`
    margin-right: 40px !important; 
    display: flex;
    gap: 16px;
`