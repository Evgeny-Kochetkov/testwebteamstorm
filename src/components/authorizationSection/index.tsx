import { useDispatch } from 'react-redux'
import { changeValueEntry, changeValueRegistration } from '../../store/actionCreators/changeValueEntryRegistration'

import { EntryRegistrationWrap } from '../entryRegistrationContent'

import { 
    SAuthorizationSection,
    SSpanLeft,
    SSpanRight,
    SSpanBottom,
    SWrap,
    SButtonFormTab
} from './style'

export const AuthorizationSection = () => {

    const dispatch = useDispatch()

    return (
        <SAuthorizationSection>
            <SSpanLeft/>
            <SSpanRight/>
            <SSpanBottom/>
            <SWrap>
                <SButtonFormTab 
                    id='registrationTab' 
                    active={false}
                    onClick={() => dispatch(changeValueRegistration())}
                >
                    РЕГИСТРАЦИЯ
                </SButtonFormTab>
                <SButtonFormTab 
                    id='entryButtonTab' 
                    active={true}
                    onClick={() => dispatch(changeValueEntry())}
                >
                    ВХОД
                </SButtonFormTab>
                <EntryRegistrationWrap/>
            </SWrap>
        </SAuthorizationSection>
    )
}