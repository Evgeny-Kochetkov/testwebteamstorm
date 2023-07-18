import styled from 'styled-components'

import trapezoidImg from '../../assets/img/logo-trapezoid.svg'

export const SHeader = styled.header<{rating: boolean}>`
    position: fixed;
    display: flex;
    justify-content: ${({rating}) => rating ? 'space-between' : 'end'};
    align-items: center;
    height: 6vh;
    width: calc(100vw - (100vw - 100%));
    background: linear-gradient(rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 52.60%), linear-gradient(rgba(0, 0, 0, 0.00) 49.48%, rgba(0, 0, 0, 0.40) 100%), #1A1A1A;
    box-shadow: 0px 0.4vh 2vh 0px rgba(0, 0, 0, 0.70);
    z-index: 20;
    padding: 0 2.5vw; 
`

export const SLinkLogo = styled.a`
    display: flex;
    justify-content: center;
    width: 20vw;
    height: 10vh;
    line-height: 7vh;
    position: absolute;
    font-family: Open Sans;
    text-align: center;
    color: #FFF;
    font-size: 1.2vmax;
    font-weight: 600;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.50);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: url(${trapezoidImg}) 0 0/100% no-repeat;
`

export const SNavUl = styled.ul`
    display: flex;
    gap: 1.6vh;
`

export const SRatingWrap = styled.div<{rating: boolean}>`
    display: ${({rating}) => rating ? 'flex' : 'none'};
    gap: 2vh;
    width: 46vh;
    height: 3vh;
`

export const SRating = styled.button`
    position: relative;
    width: 100%;
    height: 100%;
    color: #FFF;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.50);
    font-family: Open Sans;
    font-size: 1vmax;
    font-weight: 600;
    background: #1A1A1A;
    box-shadow: 0px 0px 5vh 0px rgba(0, 0, 0, 0.70) inset, 0px 0.4vh 1vh 0px rgba(0, 0, 0, 0.50);
    border-radius: 1vh;
    &::before {
        content: '';
        left: -2px;
        top: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        position: absolute;
        background: linear-gradient( rgba(255, 154, 61, 0.17), rgba(255, 154, 61, 1)), linear-gradient(360deg, rgba(0, 0, 0, 0.81), rgba(0, 0, 0, 0)), linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0));
        z-index: -1;
        border-radius: inherit;
    }
`