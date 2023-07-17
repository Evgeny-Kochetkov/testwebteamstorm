import { 
    SMainContent,
    SBlock,
    SUserCardWrap,
    SNickName
} from "./style"

export const MainContent = () => {
    return (
        <SMainContent>
            <SBlock width="27.2vw" height="23vh">
                <SUserCardWrap>
                    <SNickName>
                        NickName
                    </SNickName>
                </SUserCardWrap>
            </SBlock>
        </SMainContent>
    )
}