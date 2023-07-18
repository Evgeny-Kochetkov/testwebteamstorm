import { useMemo } from 'react'

import { 
    SMenuButtons,
    SMenuButton
} from './style'

import { menuButtonsConfig } from './config'

export const MenuButtons = () => {

    const menuButtons = useMemo(() => {
        return menuButtonsConfig.map(({id, icon, text, bigSize}) => {

            const iconItem = icon ? <img src={icon} alt={id}/> : null
            
            return (
                <SMenuButton id={id} key={id} gridArea={id} bigSize={bigSize}>
                    {iconItem}
                    {text}
                </SMenuButton>
            )
        })
    }, [])

    return (
        <SMenuButtons>
            {menuButtons}
        </SMenuButtons>
    )
}