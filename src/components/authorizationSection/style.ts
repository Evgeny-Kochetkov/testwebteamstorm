import styled, { css } from 'styled-components'

import authorizationBG from '../../assets/img/authorizationBG.jpg'
import registrationPolygon from '../../assets/img/registration-polygon.svg'
import entryPolygon from '../../assets/img/entry-polygon.svg'

import { theme } from '../../theme'

const { colors: { black, yellow, yellow50opacity }, gradientOne, gradientTwo, shadow } = theme  


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

export const SWrap = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 10vh;
`

const leftPozitionBtn = css`
    transform: translateX(45%);
    color: rgba(128, 128, 128, 0.603);
    background: linear-gradient(0deg, rgba(0,0,0,1)  0%, rgb(19, 18, 18) 100%);
    border-top: 3px solid rgba(255, 255, 255, 0.158);
    border-left: 3px  solid rgba(255, 255, 255, 0.253);
    border-radius: 10px 50px 0 0;
    transform: translateX(-45%);
`

const rightPozitionBtn = css`
    transform: translateX(45%);
    color: rgba(128, 128, 128, 0.603);
    background: linear-gradient(0deg, rgba(0,0,0,1)  0%, rgb(19, 18, 18) 100%);
    border-top: 3px solid rgba(255, 255, 255, 0.253);
    border-right: 3px solid rgba(255, 255, 255, 0.253);
    border-radius: 50px 10px 0 0;
    padding-left: 2vh;
`

export const SButtonFormTab = styled.button<{ left?: boolean }>`
    position: absolute;
    top: -5.5vh;
    width: 25vh;
    height: 6vh;
    text-align: center;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    ${({left}) => left ? leftPozitionBtn : rightPozitionBtn };
    &.active {
        background: linear-gradient(0deg, rgba(0,0,0,1)  0%, rgb(41, 41, 41) 100%);
        border-top:3px solid rgba(255, 255, 255, 0.589);
        border-right:3px solid rgba(255, 255, 255, 0.589);
        z-index: 10;
        color: rgba(255, 201, 61, 1);
    }
`