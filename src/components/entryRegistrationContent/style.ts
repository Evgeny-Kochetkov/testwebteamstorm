import styled, { css } from 'styled-components'

import checkboxIcon from '../../assets/icons/checkbox.svg'

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

export const SEntryRegistrationContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    background: linear-gradient(rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 52.60%), linear-gradient(rgba(0, 0, 0, 0.00) 49.48%, rgba(0, 0, 0, 0.40) 100%), #1A1A1A;
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

export const SLabel = styled.label`
    margin-top: 1vh;
    display: inline-block;
    width: 100%;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.50);
    text-align: center;
`

export const SInput = styled.input`
    width: 100%;
    height: 4.5vh;
    margin-top: 1vh;
    padding: 0 2vh;
    border-radius: 1.2vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.00) 75%), linear-gradient(360deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.00) 43.96%);
    color: #FFF;
    font-weight: 400;
    box-shadow: 0px 1px 0px #FFF, 1px 0px 0px #FFF, -1px 0px 0px #FFF, 0px 0px 40px 0px rgba(0, 0, 0, 0.20) inset;
    &::placeholder {
        color: #FFF;
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
    font-size: 1.1vmax;
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
    font-size: 1.1vmax;
    color: #FFC93D;
    text-decoration: underline;
`

export const SDarkgrayBox = styled.div`
    display: flex;
    padding: 0 3vh;
    flex-direction: column;
    align-items: center;
    margin-top: 1vh;
    width: 100%;
    height: 100%;
    background: #232323;
    border-radius: 0 0 30px 30px;
`

export const SGreenButton = styled.button<{ width: string}>`
    margin-top: 1vh;
    width: ${({width}) => width}; 
    height: 5vh;
    color: #FFF;
    border-radius: 1.2vh;
    background: linear-gradient(180deg, #06AE17 0%, #126B10 52.69%, #0B6209 100%), linear-gradient(180deg, #353535 0%, #343434 52.69%, #282828 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.50);
    text-align: center;
    border: 1px solid #D2D2D2;
`

export const SP = styled.p`
    margin-top: 1vh;
    font-size: 1.1vmax;
    color: #FFC93D;
`

export const SLine = styled.span`
    margin-top: 1vh;
    height: 1px;
    width: 100%;
    background: black;
    opacity: 0.2;
    box-shadow: 0px 3px 0px #D9D9D9;
`

export const SGridBox = styled.div<{ entryRegistrationState: string }>`
    margin-top: 2.5vh;
    display: grid;
    width: 100%;
    gap: 2vh;
    grid-template: ${({entryRegistrationState}) => entryRegistrationState === 'entry' ? '5vh 5vh 5vh / 1fr 1fr' : '5vh 5vh / 1fr 1fr'} ;
    grid-template-areas: ${({entryRegistrationState}) => entryRegistrationState === 'entry' ? 
        `
            'guestAccountBtn guestAccountBtn'
            'googleBtn appleBtn'
            'facebookBtn yandexBtn'
        ` : 
        `
            'googleBtn appleBtn'
            'facebookBtn yandexBtn'
        `};
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
    color: ${({green}) => green ? '#72FC05' : '#FFF'};
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.50);
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

export const SButtonsMaleFemaleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
    width: 100%;
    gap: 4vh;
`

export const SEnterWordWrap = styled.div`
    display: flex;
    align-items: center;
`