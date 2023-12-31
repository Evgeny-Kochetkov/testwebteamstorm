import styled from 'styled-components'

export const SNavMenuButton = styled.button<{ red: boolean | undefined, bigSize: boolean | undefined }>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: ${({bigSize}) => bigSize ? '10.8vh' : '3.4vh'};
    height: 3.4vh;
    border-radius: 1vh;
    border: 2px solid linear-gradient(#e66465, #9198e5);
    background-color: ${({red}) => red ? '#361414' : '#242222' };
    color: ${({red}) => red ? '#FBB' : '#D9D9D9' };
    font-size: 1vmax;
    font-weight: 700;
    z-index: 22;
    
    &::before {
        content: '';
        position: absolute;
        width: ${({bigSize}) => bigSize ? 'calc(10.8vh + 4px)' : 'calc(3.4vh + 4px)'};
        height: calc(3.4vh + 4px);
        background: ${({red}) => red ? 'linear-gradient(rgba(255, 144, 144, 100), rgba(64, 25, 25, 100))' : 'linear-gradient(rgba(255, 255, 255, 100), rgba(255, 253, 252, 0))'};
        z-index: -1;
        border-radius: inherit;
        box-shadow: 0px 0px 2vh 0px rgba(0, 0, 0, 0.60), 0px 0.7vh 0px 0px #000;
    }
`