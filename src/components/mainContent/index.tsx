import { 
    SMainContent,
    SBlock,
    SUserCardWrap,
    SNickName,
    SWrapCardContentGrid,
    SWrapAvatar,
    SAvatar,
    SVip,
    SRank,
    SContentRank,
    SNameIndicator,
    SRatingUserCard
} from "./style"

import avatar from '../../assets/img/avatar.jpg'
import vip from '../../assets/icons/vip.svg'

export const MainContent = () => {
    return (
        <SMainContent>
            <SBlock width="35vw" height="23vh">
                <SUserCardWrap>
                    <SNickName>
                        NickName
                    </SNickName>
                    <SWrapCardContentGrid>
                        <SWrapAvatar>
                            <SAvatar>
                                <SVip src={vip} alt='vip'/>
                                <img src={avatar} alt='avatar' style={{'width' : '12vh', 'height': '13vh', 'borderRadius' : '0.8vh'}}/>
                            </SAvatar>
                            <SRank>
                                <SContentRank>
                                    Монополист
                                </SContentRank>
                            </SRank>
                        </SWrapAvatar>
                        <SNameIndicator gridArea={'gold'}>
                            Золото
                        </SNameIndicator>
                        <SNameIndicator gridArea={'tokens'}>
                            Токены
                        </SNameIndicator>
                        <SNameIndicator gridArea={'capital'}>
                            Капитал
                        </SNameIndicator>
                        <SRatingUserCard gridArea={'goldValue'}>
                            <span style={{'color': '#FFC93D'}}>
                                8 315 кг.
                            </span>
                        </SRatingUserCard>
                        <SRatingUserCard gridArea={'totensValue'}>
                            <span style={{'color': '#FFC93D'}}>
                                8 315
                            </span>
                        </SRatingUserCard>
                        <SRatingUserCard gridArea={'totalCapital'}>
                            Общий:
                            <span style={{'color': '#FFC93D', 'paddingLeft' : '4px'}}>
                                3 023 006 184 278
                            </span>
                            <span style={{'color' : '#34F005', 'paddingLeft' : '4px'}}>
                                $
                            </span>
                        </SRatingUserCard>
                        <SRatingUserCard gridArea={'weeklyCapital'}>
                            За неделю: 1 842 750 998 $
                        </SRatingUserCard>
                    </SWrapCardContentGrid>
                </SUserCardWrap>
            </SBlock>
        </SMainContent>
    )
}

/* 
    
    <div style={{'display' : 'flex', }}>
        <div>
            <div style={{'display' : 'flex', 'flexDirection' : 'column', 'alignItems' : 'center', 'gap' : '0.7vh'}}>
                <span>
                    Золото
                </span>
                <button>
                    8 315 кг.
                </button>
            </div>
            <div style={{'display' : 'flex', 'flexDirection' : 'column', 'alignItems' : 'center', 'gap' : '0.7vh'}}>
                <span>
                    Золото
                </span>
                <button>
                    8 315 кг.
                </button>
            </div>
        </div>
        <div>

        </div>
    </div>

*/