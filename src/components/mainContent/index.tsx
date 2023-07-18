import { UserCard } from '../userCard'

import { 
    SMainContent,
    SBlock
} from "./style"

export const MainContent = () => {
    return (
        <SMainContent>
            <SBlock width="35vw" height="23vh">
                <UserCard/>
            </SBlock>
        </SMainContent>
    )
}