import { useMemo } from 'react'

import { SBlock } from "../mainContent/style"

import { 
    SGameList,
    SGameListButtonWrap,
    SGameListButton
} from "./style"

import { gameListButtonsConfig } from './config'

export const GameList = () => {

    const gameListButtons = useMemo(() => {
        return gameListButtonsConfig.map(({id, text, value}, i) => {

            const valueContent = value ? (
                <>
                    <span style={{'marginLeft': '4px'}}>    
                        (
                    </span>
                    <span style={{'color': '#FA9E14'}}>
                        {value}
                    </span>
                    <span>
                        )
                    </span>
                </>
            ) : null
            
            return (
                <SGameListButton id={id} key={id} className={i ? '' : 'active'}>
                    <span style={{'marginTop': '-1vh'}}>
                        {text} 
                        {valueContent}
                    </span>
                </SGameListButton>
            )
        })
    }, [])

    return (
        <SGameList gridArea={'gameList'}>
            <SGameListButtonWrap>
                {gameListButtons}
            </SGameListButtonWrap>
            <SBlock>

            </SBlock>
        </SGameList>
    )
}