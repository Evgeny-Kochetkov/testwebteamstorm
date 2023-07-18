import styled from 'styled-components'

export const SMainContent = styled.div`
    display: grid;
    justify-items: center;
    grid-template:  23vh 2vh 36.5vh 2vh 23vh/1fr 1fr 3vh 1fr;
    grid-template-areas: 
        'userCard . . menuButtons'
        '. . . allGamers'
        'gameList gameList . allGamers'
        '. . . allGamers'
        'chat chat . allGamers';
    width: 100%;
    height: 100%;
    padding: 8vh 2.5vw 4vh 2.5vw;
`

export const SBlock = styled.div<{gridArea?: string}>`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 1.4vh;
    border: 2px solid linear-gradient(#e66465, #9198e5);
    background: #1A1A1A;
    transform-style: preserve-3d;
    grid-area: ${({gridArea}) => gridArea};
    
    &::before {
        content: '';
        top: -2px;
        left: -2px;
        position: absolute;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        background: linear-gradient(rgba(220, 220, 220, 1), rgba(90, 90, 90, 1));
        border-radius: inherit;
        transform: translateZ(-1px);
    }
`