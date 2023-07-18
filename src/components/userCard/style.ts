import styled from 'styled-components'

import { SRating } from '../header/style'

export const SUserCardWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`
export const SNickName = styled.h1`
    width: 100%;
    height: 4vh;
    text-align: center;
    padding-top: 1vh;
    font-size: 1.5vmax;
    background: rgba(0, 0, 0, 0.70);
    border-radius: 1.4vh 1.4vh 0 0;
`

export const SWrapCardContentGrid = styled.div`
    display: grid;
    justify-items: center;
    grid-template: 1vh 2vh 0.4vh 2.5vh 2vh 2vh 0.4vh 2.5vh 1vh 2.5vh 2vh / 2.5vh 1fr 2.5vh 1fr 2vh 1fr 2.5vh;
    grid-template-areas: 
        '. . . . . . .'
        '. avatar . gold . tokens .'
        '. avatar . . . . .'
        '. avatar . goldValue . totensValue .'
        '. avatar . . . . .'
        '. avatar . capital capital capital .'
        '. avatar . . . . .'
        '. avatar . totalCapital totalCapital totalCapital .'
        '. avatar . . . . .'
        '. avatar . weeklyCapital weeklyCapital weeklyCapital .'
        '. . . . . . .';
`

export const SWrapAvatar = styled.div`
    grid-area: avatar;
`

export const SAvatar = styled.div`
    position: relative;
    border-radius: 0.8vh;
    transform-style: preserve-3d;
    width: 12vh;
    height: 13vh;
    &::before {
        content: '';
        top: -2px;
        left: -2px;
        position: absolute;
        width: calc(12vh + 4px);
        height: calc(13vh + 4px);
        background: linear-gradient(-45deg, rgba(255, 168, 0, 1), rgba(255, 169, 2, 0)), linear-gradient(-135deg, rgba(255, 205, 147, 1), rgba(226, 187, 136, 1));
        border-radius: inherit;
        transform: translateZ(-1px);
    }
`

export const SVip = styled.img`
    position: absolute;
    width: 5vh;
    height: 5vh;
    top: -1.5vh;
    right: -1.7vh;
`

export const SRank = styled.button`
    margin-top: 1vh;
    width: 12vh;
    height: 2.5vh;
    position: relative;
    transform-style: preserve-3d;
    border-radius: 2vh;
    background: black;
    &::before {
        content: '';
        left: -2px;
        top: -2px;
        width: calc(12vh + 4px);
        height: calc(100% + 4px);
        position: absolute;
        background: linear-gradient( rgba(255, 154, 61, 0.17), rgba(255, 154, 61, 1)), linear-gradient(360deg, rgba(0, 0, 0, 0.81), rgba(0, 0, 0, 0)), linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0));
        transform: translateZ(-2px);
        border-radius: inherit;
    }
    &::after {
        content: '';
        left: 2px;
        top: 2px;
        width: calc(6vh - 4px);
        height: calc(100% - 4px);
        position: absolute;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #117600;
        transform: translateZ(0px);
        border-radius: 2vh 0 0 2vh;
        opacity: 0.4000000059604645;
        background-size: 50% auto;
    }
`

export const SContentRank = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFA724;
    font-weight: 700;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.50);
    font-size: 0.8vmax;
`

export const SNameIndicator = styled.span<{gridArea: string}>`
    grid-area: ${({gridArea}) => gridArea};
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.50);
    font-weight: 600;
`

export const SRatingUserCard = styled(SRating)<{gridArea: string}>`
    grid-area: ${({gridArea}) => gridArea};
    border-radius: 0.8vh;
    color: #F4E6C2;
`