import { useDispatch } from 'react-redux'
import { changeValueEntry, changeValueRegistration } from '../../store/actionCreators/changeValueEntryRegistration'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import { EntryRegistrationWrap } from '../entryRegistrationContent'

import { 
    SAuthLayoutSection,
    SSpanLeft,
    SSpanRight,
    SSpanBottom,
    SWrap,
    SButtonFormTab
} from './style'

export const AuthLayoutSection = (/* {children}: {children: React.ReactNode} */) => {

    const {entryRegistrationState} = useTypedSelector(state => state.entryRegistrationState)

    const dispatch = useDispatch()

    return (
        <SAuthLayoutSection>
            <SSpanLeft/>
            <SSpanRight/>
            <SSpanBottom/>
            <SWrap>
                <SButtonFormTab
                    id='registrationTab'
                    onClick={() => dispatch(changeValueRegistration())}
                    className={entryRegistrationState === 'registration' ? 'active' : ''}
                    
                >
                    РЕГИСТРАЦИЯ
                </SButtonFormTab>
                <SButtonFormTab 
                    id='entryButtonTab'
                    onClick={() => dispatch(changeValueEntry())}
                    className={entryRegistrationState === 'entry' ? 'active' : ''}
                    left={true}
                >
                    ВХОД
                </SButtonFormTab>
                <EntryRegistrationWrap/>
            </SWrap>
        </SAuthLayoutSection>
    )
}