import styled from 'styled-components'

export const SGameList = styled.div<{gridArea: string}>`
    width: 100%;
    height: 100%;
    grid-area: ${({gridArea}) => gridArea};
`

export const SGameListButtonWrap = styled.div`
    display: flex;
    height: 4.8vh;
    gap: 1vh;
`

export const SGameListButton = styled.button`
    width: 10.3vw;
    height: 110%;
    color: #FFF;
    text-align: center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 52.60%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 49.48%, rgba(0, 0, 0, 0.40) 100%), #414141;
    transform-style: preserve-3d;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px 30px 0 0;
    >*{
        opacity: 0.6;
    }
    &.active {
        >*{
            opacity: 1;
        }
        &::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            width: calc(100% + 4px);
            height: calc(110% + 4px);
            background: linear-gradient(-45deg, rgba(255, 89, 36, 100), rgba(255, 162, 41, 100));
            border-radius: inherit;
            /* box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.50); */
            
            transform: translateZ(-1px);
        }
    }
`