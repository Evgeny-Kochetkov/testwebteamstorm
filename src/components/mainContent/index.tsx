import { UserCard } from '../userCard'
import { MenuButtons } from '../menuButtons'

import { 
    SMainContent,
    SBlock
} from "./style"

export const MainContent = () => {
    return (
        <SMainContent>
            <SBlock width="35vw" height="23vh" gridArea={'userCard'}>
                <UserCard/>
            </SBlock>
            <MenuButtons/>
        </SMainContent>
    )
}