import { useMemo } from 'react'

import { SBlock } from "../mainContent/style"

import { 
    SGameList,
    SGameListButtonWrap,
    SGameListButton,
    SFilterWrap,
    SFilter,
    SGameListContentWrap
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
                <SFilterWrap>
                    <SFilter width='16.5vh'>
                        Название игры
                    </SFilter>
                    <SFilter width='16.5vh'>
                        Игроки
                    </SFilter>
                    <SFilter width='13vh'>
                        Поле
                    </SFilter>
                    <SFilter width='9vh'>
                        Ставки
                    </SFilter>
                    <SFilter width='10.8vh'>
                        Вип-карта
                    </SFilter>
                </SFilterWrap>
                <SGameListContentWrap>

                </SGameListContentWrap>
            </SBlock>
        </SGameList>
    )
}