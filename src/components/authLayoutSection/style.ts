import styled from 'styled-components'

import authorizationBG from '../../assets/img/authorizationBG.jpg'

export const SAuthLayoutSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url(${authorizationBG}) center center/cover no-repeat;
    /* z-index: 10; */
`

export const SSpanLeft = styled.span`
    position: absolute;
    left: 0;
    width: 1.5vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 52.60%), linear-gradient(rgba(0, 0, 0, 0.00) 49.48%, rgba(0, 0, 0, 0.40) 100%), #1A1A1A;
    box-shadow: 0px 0.4vh 2vh 0px rgba(0, 0, 0, 0.70);
    z-index: 30;
`

export const SSpanRight = styled.span`
    position: absolute;
    right: 0;
    width: 1.5vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 52.60%), linear-gradient(rgba(0, 0, 0, 0.00) 49.48%, rgba(0, 0, 0, 0.40) 100%), #1A1A1A;
    box-shadow: 0px 0.4vh 2vh 0px rgba(0, 0, 0, 0.70);
    z-index: 30;
`
export const SSpanBottom = styled.span`
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 3vh;
    background: linear-gradient(rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 52.60%), linear-gradient(rgba(0, 0, 0, 0.00) 49.48%, rgba(0, 0, 0, 0.40) 100%), #1A1A1A;
    box-shadow: 0px 0.4vh 2vh 0px rgba(0, 0, 0, 0.70);
`