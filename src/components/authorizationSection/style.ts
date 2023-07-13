import styled, { css } from 'styled-components'

import authorizationBG from '../../assets/img/authorizationBG.jpg'
import registrationPolygon from '../../assets/img/registration-polygon.svg'
import entryPolygon from '../../assets/img/entry-polygon.svg'
import checkboxIcon from '../../assets/icons/checkbox.svg'

import { theme } from '../../theme'

const { colors: { whiteColor, black, yellow, yellow50opacity }, gradientOne, gradientTwo, shadow, textShadow } = theme


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
    margin-top: 108px;
`

export const SFormWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    background: linear-gradient(${gradientOne}), linear-gradient(${gradientTwo}), ${black};
    border-radius: 30px;
    transform-style: preserve-3d;
    z-index: 20;
    &::before {
        content: '';
        position: absolute;
        top: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        background: linear-gradient(rgba(255, 255, 255, 100), rgba(255, 253, 252, 0));
        border-radius: inherit;
        box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.50);
        transform: translateZ(-1px);
    }
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

export const SLabel = styled.label`
    margin-top: 2vh;
    display: inline-block;
    width: 100%;
    text-shadow: ${textShadow};
    text-align: center;
`

export const SInput = styled.input`
    width: 100%;
    height: 4.5vh;
    margin-top: 9px;
    padding: 0 2vh;
    border-radius: 1.2vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.00) 75%), linear-gradient(360deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.00) 43.96%);
    color: ${whiteColor};
    font-weight: 400;
    box-shadow: 0px 1px 0px #FFF, 1px 0px 0px #FFF, -1px 0px 0px #FFF, 0px 0px 40px 0px rgba(0, 0, 0, 0.20) inset;
    &::placeholder {
        color: ${whiteColor};
        font-weight: 400;
    }
`

export const SInputCheckbox = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;
`
export const SLabelCheckbox = styled.label`
    margin-top: 1.5vh;
    display: inline-flex;
    align-items: center;
    font-size: 1.3vmax;
    &:before {
        content: '';
        display: inline-block;
        width: 2vh;
        height: 2vh;
        background: url(${checkboxIcon}) 0 0/100% no-repeat;
        margin-right: 11px;
    }
`

export const SA = styled.a`
    font-size: 1.3vmax;
    color: ${yellow};
    text-decoration: underline;
`

export const SDarkgrayBox = styled.div`
    display: flex;
    padding: 0 30px;
    flex-direction: column;
    align-items: center;
    margin-top: 1vh;
    width: 100%;
    height: 100%;
    background: #232323;
    border-radius: 0 0 30px 30px;
`

export const SContinueButton = styled.button`
    margin-top: 1vh;
    width: 15vw;
    height: 5vh;
    color: ${whiteColor};
    border-radius: 12px;
    background: linear-gradient(180deg, #06AE17 0%, #126B10 52.69%, #0B6209 100%), linear-gradient(180deg, #353535 0%, #343434 52.69%, #282828 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
    text-shadow: ${textShadow};
    text-align: center;
    border: 1px solid #D2D2D2;
`

export const SP = styled.p`
    margin-top: 1vh;
    font-size: 1.3vmax;
    color: ${yellow};
`

export const SLine = styled.span`
    margin-top: 1vh;
    height: 1px;
    width: 100%;
    background: black;
    opacity: 0.2;
    box-shadow: 0px 3px 0px #D9D9D9;
`

export const SGridBox = styled.div`
    margin-top: 2.5vh;
    display: grid;
    width: 100%;
    grid-template: 5vh 5vh 5vh / 1fr 1fr;
    gap: 2vh;
    grid-template-areas:
        'guestAccountBtn guestAccountBtn'
        'googleBtn appleBtn'
        'facebookBtn yandexBtn';
    margin-bottom: 2vh;
`

const left = css`
    left: 20px;
`

const right = css`
    right: 20px;
`

export const SEntryMenuButton = styled.button<{ gridArea: string, green: boolean, odd: number, icon: string | undefined}>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    grid-area: ${({gridArea}) => gridArea};
    background: linear-gradient(180deg, #353535 0%, #343434 52.69%, #282828 100%);
    border-radius: 1.2vh;
    border: 1px solid white;
    color: ${({green}) => green ? '#72FC05' : whiteColor};
    text-shadow: ${textShadow};
    opacity: 0.699999988079071;
    box-shadow: 0px -4px 2px rgba(125, 125, 125, 0.50), 0px 4px 4px rgba(0, 0, 0, 0.50);
    &::before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 2.5vh;
        height: 2.5vh;
        background: ${({icon}) => `url(${icon})`} center center/cover no-repeat;
        margin-right: 1vh;
        ${({odd}) => odd ? left : right}
    }
`