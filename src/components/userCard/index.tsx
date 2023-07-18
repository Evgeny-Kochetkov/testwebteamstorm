import {
    SUserCardWrap,
    SNickName,
    SWrapCardContentGrid,
    SWrapAvatar,
    SAvatar,
    SVip,
    SRank,
    SContentRank,
    SNameIndicator,
    SRatingUserCard,
    SPlus
} from './style'

import avatar from '../../assets/img/avatar.jpg'
import vip from '../../assets/icons/vip.svg'
import plus from '../../assets/icons/plus.svg'

export const UserCard = () => (
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
                <SPlus src={plus} alt='plus'/>
            </SRatingUserCard>
            <SRatingUserCard gridArea={'totensValue'}>
                <span style={{'color': '#FFC93D'}}>
                    8 315
                </span>
                <SPlus src={plus} alt='plus'/>
            </SRatingUserCard>
            <SRatingUserCard gridArea={'totalCapital'}>
                Общий:
                <span style={{'color': '#FFC93D', 'paddingLeft' : '4px'}}>
                    3 023 006 184 278
                </span>
                <span style={{'color' : '#34F005', 'paddingLeft' : '4px'}}>
                    $
                </span>
                <SPlus src={plus} alt='plus'/>
            </SRatingUserCard>
            <SRatingUserCard gridArea={'weeklyCapital'}>
                За неделю: 1 842 750 998 $
                <SPlus src={plus} alt='plus'/>
            </SRatingUserCard>
        </SWrapCardContentGrid>
    </SUserCardWrap>
)