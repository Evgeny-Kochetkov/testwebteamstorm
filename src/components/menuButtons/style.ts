import styled from 'styled-components'

export const SMenuButtons = styled.div`
    display: grid;
    grid-template:  8.6vh 2vh 8.6vh/8.6vh 2.2vh 8.6vh 2.2vh 8.6vh 2.2vh 8.6vh;
    grid-template-areas: 
        'data . rating . store . bank'
        '. . . . . . .'
        'newgame newgame newgame . inviteFrend inviteFrend inviteFrend';
`

export const SMenuButton = styled.button<{gridArea: string, bigSize: boolean | undefined}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${({bigSize}) => bigSize ? 'center' : 'space-between'};
    font-size: ${({bigSize}) => bigSize ? '1.5vmax' : '0.9vmax'};
    font-weight: 700;
    color: #461900;
    background: linear-gradient(270deg, rgba(255, 122, 0, 0.00) 10.94%, #FF7A00 100%), #F5BC06;
    grid-area: ${({gridArea}) => gridArea};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.60), 0px 4px 0px #7C3C00;
    border-radius: 1.6vh;
    padding: 1.3vh 0.6vh 0.6vh 0.6vh;
`