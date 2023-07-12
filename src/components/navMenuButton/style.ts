import styled from 'styled-components'

import { theme } from '../../theme'

const { colors: { darkgray, driedBlood, smoke, pink } } = theme

export const SNavMenuButton = styled.button<{ red: boolean | undefined, bigSize: boolean | undefined }>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.41px;
    width: ${({bigSize}) => bigSize ? '108px' : '32px'};
    height: 32px;
    border-radius: 10px;
    border: 2px solid linear-gradient(#e66465, #9198e5);
    background-color: ${({red}) => red ? driedBlood : darkgray };
    color: ${({red}) => red ? pink : smoke };
    font-size: 22px;
    font-weight: 700;
    z-index: 22;
    
    &::before {
        content: '';
        position: absolute;
        width: ${({bigSize}) => bigSize ? '112px' : '36px'};
        height: 36px;
        background: ${({red}) => red ? 'linear-gradient(rgba(255, 144, 144, 100), rgba(64, 25, 25, 100))' : 'linear-gradient(rgba(255, 255, 255, 100), rgba(255, 253, 252, 0))'};
        z-index: -1;
        border-radius: inherit;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.60), 0px 7px 0px 0px #000;
    }
`