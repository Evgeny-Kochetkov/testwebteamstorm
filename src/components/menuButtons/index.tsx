import { useMemo } from 'react'

import { 
    SMenuButtons,
    SMenuButton
} from './style'

import { menuButtonsConfig } from './config'

export const MenuButtons = () => {

    const menuButtons = useMemo(() => {
        return menuButtonsConfig.map(({id, icon, text, bigSize}) => {

            const iconItem = icon ? <img src={icon} alt={id} style={{'height' : '4.3vh'}}/> : null
            
            return (
                <SMenuButton id={id} key={id} gridArea={id} bigSize={bigSize}>
                    {iconItem}
                    {text}
                </SMenuButton>
            )
        })
    }, [])

    return (
        <div style={{'display' : 'flex', 'justifyContent': 'end', 'gridArea': 'menuButtons', 'width': '100%'}}>
            <SMenuButtons>
                {menuButtons}
            </SMenuButtons>
        </div>
    )
}