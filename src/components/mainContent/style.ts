import styled from 'styled-components'

export const SMainContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    gap: 3vh;
    padding: 8vh 2.5vw 4vh 2.5vw;
`

export const SBlock = styled.div<{width: string, height: string}>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({width}) => width};
    height: ${({height}) => height};
    border-radius: 1.4vh;
    border: 2px solid linear-gradient(#e66465, #9198e5);
    background: #1A1A1A;
    transform-style: preserve-3d;
    
    &::before {
        content: '';
        top: -2px;
        position: absolute;
        width: calc(${({width}) => width} + 4px);
        height: calc(${({height}) => height} + 4px);
        background: linear-gradient(rgba(255, 255, 255, 100), rgba(255, 253, 252, 0));
        border-radius: inherit;
        transform: translateZ(-1px);
    }
`

export const SUserCardWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 2vh;
`
export const SNickName = styled.h1`
    width: 100%;
    text-align: center;
    margin-top: 1vh;
    font-size: 1vmax;
`

export const SWrapCardContent = styled.div`
    padding: 0 2vh;
`

export const SWrapAvatar = styled.div`

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

/* 
    margin-top: 2.5vh;
    display: grid;
    width: 100%;
    gap: 2vh;
    grid-template: 5vh 5vh 5vh / 1fr 1fr'} ;
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
*/