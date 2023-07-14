import styled, { css } from 'styled-components'

import authorizationBG from '../../assets/img/authorizationBG.jpg'
import registrationPolygon from '../../assets/img/registration-polygon.svg'
import entryPolygon from '../../assets/img/entry-polygon.svg'

import { theme } from '../../theme'

const { colors: { black, yellow, yellow50opacity }, gradientOne, gradientTwo, shadow } = theme  


export const SAuthorizationSection = styled.section`
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

export const SWrap = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 10vh;
`

const leftPozitionBtn = css`
    transform: translateX(-45%);
    color: ${yellow};
    background: url(${entryPolygon}) 0 0/100% no-repeat;
    
`

const rightPozitionBtn = css`
    transform: translateX(45%);
    color: ${yellow50opacity};
    background: url(${registrationPolygon}) 0 0/100% no-repeat;
    padding-left: 2vh;
`

export const SButtonFormTab = styled.button<{ id: string, active: boolean }>`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 25vh;
    height: 6vh;
    top: -5.5vh;
    padding-top: 1.5vh;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    ${({id}) => id === 'entryButtonTab' ? leftPozitionBtn : rightPozitionBtn }
`