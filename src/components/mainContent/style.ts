import styled from 'styled-components'

export const SMainContent = styled.div`
    display: grid;
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