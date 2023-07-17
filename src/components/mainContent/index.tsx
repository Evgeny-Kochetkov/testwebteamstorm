import { 
    SMainContent,
    SBlock,
    SUserCardWrap,
    SNickName,
    SWrapCardContent,
    SWrapAvatar,
    SAvatar,
    SVip,
    SRank,
    SContentRank
} from "./style"

import avatar from '../../assets/img/avatar.jpg'
import vip from '../../assets/icons/vip.svg'

export const MainContent = () => {
    return (
        <SMainContent>
            <SBlock width="27.2vw" height="23vh">
                <SUserCardWrap>
                    <SNickName>
                        NickName
                    </SNickName>
                    <SWrapCardContent>
                        <SWrapAvatar>
                            <SAvatar>
                                <SVip src={vip} alt='vip'/>
                                <img src={avatar} alt='avatar' style={{'width' : '12vh', 'height': '13vh', 'borderRadius' : '0.8vh'}}/>
                            </SAvatar>
                            <SRank>
                                <SContentRank style={{'position': 'absolute', 'top': '0', 'left': '0', 'zIndex': '1'}}>
                                    Монополист
                                </SContentRank>
                            </SRank>
                        </SWrapAvatar>
                    </SWrapCardContent>
                </SUserCardWrap>
            </SBlock>
        </SMainContent>
    )
}