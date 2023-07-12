import { useMemo } from 'react'

import { NavMenuButton } from "../navMenuButton"

import { 
    SHeader, 
    SLogo,
    SLinkLogo,
    SNavUl
} from "./style"

import { navButtonsConfig } from './config'

import trapezoidImg from '../../assets/img/logo-trapezoid.svg'

export const Header = () => {

    const navButtons = useMemo(() => {
        return navButtonsConfig.map(({id, icon, text, red, bigSize}) => {

            const iconItem = icon ? <img src={icon} alt={id}/> : null
            
            return (
                <li key={id}>
                    <NavMenuButton id={id} red={red} bigSize={bigSize}>
                        {text}
                        {iconItem}
                    </NavMenuButton>
                </li>
            )
        })
    }, [])

    return (
        <SHeader>
            <SLogo src={trapezoidImg} alt='logo'/>
            <SLinkLogo
                href='#somehref'
                title='The site of the company'
            >
                ЛОГО
            </SLinkLogo>
            <nav>
                <SNavUl>
                    {navButtons}
                </SNavUl>
            </nav>
        </SHeader>
    );
}