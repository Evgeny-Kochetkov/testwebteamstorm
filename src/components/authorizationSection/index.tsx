import { useMemo } from 'react'

import iAmNotARobotImg from '../../assets/img/iAmNotARobot.jpg'

import { 
    SAuthorizationSection,
    SSpanLeft,
    SSpanRight,
    SSpanBottom,
    SWrap,
    SFormWrap,
    SButtonFormTab,
    SLabel,
    SInput,
    SInputCheckbox,
    SLabelCheckbox,
    SA,
    SDarkgrayBox,
    SContinueButton,
    SP,
    SLine,
    SGridBox,
    SEntryMenuButton
} from './style'

import { socialEntryButtonsConfig } from './config'

export const AuthorizationSection = () => {

    const socialEntryButtons = useMemo(() => {
        return socialEntryButtonsConfig.map(({id, text, icon}, i) => {
            return (
                <SEntryMenuButton id={id} gridArea={id} key={id} green={!i} odd={i%2} icon={icon}>
                    {text}
                </SEntryMenuButton>
            )
        })
    }, [])

    return (
        <SAuthorizationSection>
            <SSpanLeft/>
            <SSpanRight/>
            <SSpanBottom/>
            <SWrap>
                <SButtonFormTab id='registrationTab' active={false}>
                    РЕГИСТРАЦИЯ
                </SButtonFormTab>
                <SButtonFormTab id='entryButtonTab' active={true}>
                    ВХОД
                </SButtonFormTab>
                <SFormWrap>
                    <form action='' method='post' name='form' style={{'margin' : '0 30px'}}>
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
                        <SContinueButton>
                            ПРОДОЛЖИТЬ
                        </SContinueButton>
                        <SP>Вход с помощью:</SP>
                        <SLine/>
                        <SGridBox>
                            {socialEntryButtons}
                        </SGridBox>
                    </SDarkgrayBox>
                </SFormWrap>
            </SWrap>
        </SAuthorizationSection>
    )
}