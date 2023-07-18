import { useMemo } from 'react'

import { NavMenuButton } from "../navMenuButton"

import { 
    SHeader,
    SLinkLogo,
    SNavUl,
    SRatingWrap,
    SRating
} from "./style"

import { navButtonsConfig } from './config'

export const Header = ({rating} : {rating: boolean}) => {

    const navButtons = useMemo(() => {
        return navButtonsConfig.map(({id, icon, text, red, bigSize}) => {

            const iconItem = icon ? <img src={icon} alt={id} style={{'height' : '80%'}}/> : null
            
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
        <SHeader rating={rating}>
            <SLinkLogo
                href='#somehref'
                title='The site of the company'
            >
                {rating ? 'название игры' : 'ЛОГО'}
            </SLinkLogo>
            <SRatingWrap rating={rating}>
                <SRating>
                    Общий рейтинг:
                    <span style={{'color' : '#FF0B0B', 'paddingLeft' : '4px'}}>
                        8315
                    </span>
                </SRating>
                <SRating>
                    Рейтинг недели:
                    <span style={{'color' : '#34F005', 'paddingLeft' : '4px'}}>
                        8315
                    </span>
                </SRating>
            </SRatingWrap>
            <nav>
                <SNavUl>
                    {navButtons}
                </SNavUl>
            </nav>
        </SHeader>
    );
}