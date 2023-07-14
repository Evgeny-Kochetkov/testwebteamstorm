import { useMemo } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import {
    SEntryRegistrationWrap,
    SLabel,
    SInput,
    SInputCheckbox,
    SLabelCheckbox,
    SA,
    SDarkgrayBox,
    SGreenButton,
    SP,
    SLine,
    SGridBox,
    SEntryMenuButton,
    SButtonsMaleFemaleWrap,
    SEnterWordWrap
} from './style'

import iAmNotARobotImg from '../../assets/img/iAmNotARobot.jpg'
import enterWordImg from '../../assets/img/enter-word.jpg'

import { socialEntryButtonsConfig } from '../entryRegistrationContent/config'

export const EntryRegistrationWrap = () => {

    const {entryRegistrationState} = useTypedSelector(state => state.entryRegistrationState)

    const socialEntryButtons = useMemo(() => {
        return socialEntryButtonsConfig.map(({id, text, icon}, i) => {
            return (
                <SEntryMenuButton id={id} gridArea={id} key={id} green={!i} odd={i%2} icon={icon}>
                    {text}
                </SEntryMenuButton>
            )
        })
    }, [])

    const socialRegistrationButtons = useMemo(() => socialEntryButtons.slice(1), [])

    const content = entryRegistrationState === 'entry' ? 
        <>
            <form action='' method='post' name='form' style={{'margin' : '0 3vh'}}>
                <SLabel htmlFor='usernameInput'>
                    Электронная почта или никнейм:
                </SLabel>
                <SInput type='text' name='username' placeholder='Никнейм юзера' id='usernameInput'/>
                <SLabel htmlFor='passwordInput'>
                    Пароль:
                </SLabel>
                <SInput type='password' name='password' placeholder='' id='passwordInput'/>
                <SInputCheckbox type='checkbox' id='rememberMe' name='rememberMe' value='yes'/> 
                <SLabelCheckbox htmlFor='rememberMe'>
                    Запомнить меня
                </SLabelCheckbox>
            </form>
            <img src={iAmNotARobotImg} alt="iAmNotARobotImg" style={{'margin' : '1vh auto', 'width' : '20vw', }}/>
            <SA href="#">Ввостановить пароль</SA>
            <SDarkgrayBox>
                <SGreenButton width={'25vh'}>
                    ПРОДОЛЖИТЬ
                </SGreenButton>
                <SP>Вход с помощью:</SP>
                <SLine/>
                <SGridBox entryRegistrationState={entryRegistrationState}>
                    {socialEntryButtons}
                </SGridBox>
            </SDarkgrayBox>
        </> : 
        <>
            <form action='' method='post' name='form' style={{'margin' : '0 3vh'}}>
                <SLabel htmlFor='userNicknameInput'>
                    Никнейм:
                </SLabel>
                <SInput type='text' name='username' placeholder='Никнейм юзера' id='userNicknameInput'/>
                <SLabel htmlFor='emailInput'>
                    Электронная почта:
                </SLabel>
                <SInput type='text' name='email' placeholder='testiets@mail.ru' id='emailInput'/> 
                <SButtonsMaleFemaleWrap>
                    <SGreenButton width={'100%'}>
                        БИЗНЕСМЕН
                    </SGreenButton>
                    <SGreenButton width={'100%'}>
                        БИЗНЕСВУМЕН
                    </SGreenButton>
                </SButtonsMaleFemaleWrap>
                <SLabel htmlFor='passwordInput'>
                    Пароль:
                </SLabel>
                <SInput type='password' name='passwordInput' placeholder='********' id='passwordInput'/>
                <SLabel htmlFor='repeatPasswordInput'>
                    Повторите пароль:
                </SLabel>
                <SInput type='password' name='repeatPassword' placeholder='********' id='repeatPasswordInput'/>
                <SLabel htmlFor='enterWordInput'>
                        Введите слово с картинки:
                    </SLabel>
                <SEnterWordWrap>
                    <SInput type='text' name='enterWord' placeholder='' id='enterWordInput'/>
                    <img src={enterWordImg} alt='enterWord' style={{'height' : '4vh', 'margin': '1vh 0 0 1vh'}}/>
                </SEnterWordWrap>
                <SLabelCheckbox htmlFor='rememberMe'>
                    Согласен с 
                    <span style={{ 'color': 'rgba(255, 201, 61, 1)', 'textDecorationLine': 'underline', 'cursor': 'pointer', 'marginLeft' : '3px'}}>
                        пользовательским соглашением
                    </span>
                </SLabelCheckbox>
            </form>
            <SDarkgrayBox>
                <SGreenButton width={'25vh'}>
                    ПРОДОЛЖИТЬ
                </SGreenButton>
                <SP>Вход с помощью:</SP>
                <SLine/>
                <SGridBox entryRegistrationState={entryRegistrationState}>
                    {socialRegistrationButtons}
                </SGridBox>
            </SDarkgrayBox>
        </>

    return (
        <SEntryRegistrationWrap>
            {content}
        </SEntryRegistrationWrap>
    )
}

{}