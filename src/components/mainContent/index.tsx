import { UserCard } from '../userCard'
import { MenuButtons } from '../menuButtons'
import { GameList } from '../gameList'

import { 
    SMainContent,
    SBlock
} from "./style"

export const MainContent = () => {
    return (
        <SMainContent>
            <SBlock gridArea={'userCard'}>
                <UserCard/>
            </SBlock>
            <MenuButtons/>
            <GameList/>
        </SMainContent>
    )
}