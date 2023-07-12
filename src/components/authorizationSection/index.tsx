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
    Slabel,
    Sinput,
    SinputCheckbox,
    SlabelCheckbox,
    SA,
    SDarkgrayBox,
    SContinueButton,
    SP,
    SLine,
    SGridBox,
    NavMenuButton
} from './style'

import { socialEntryButtonsConfig } from './config'

export const AuthorizationSection = () => {

    const socialEntryButtons = useMemo(() => {
        return socialEntryButtonsConfig.map(({id, text, icon}, i) => {
            return (
                <NavMenuButton id={id} gridArea={id} key={id} green={!i} odd={i%2} icon={icon}>
                    {text}
                </NavMenuButton>
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
                        <Slabel htmlFor='usernameInput'>
                            Электронная почта или никнейм:
                        </Slabel>
                        <Sinput type='text' name='username' placeholder='Никнейм юзера' id='usernameInput'/>
                        <Slabel htmlFor='passwordInput'>
                            Пароль:
                        </Slabel>
                        <Sinput type='password' name='password' placeholder='' id='passwordInput'/>
                        <SinputCheckbox type='checkbox' id='rememberMe' name='rememberMe' value='yes'/> 
                        <SlabelCheckbox htmlFor='rememberMe'>
                            Запомнить меня
                        </SlabelCheckbox>
                    </form>
                    <img src={iAmNotARobotImg} alt="iAmNotARobotImg" style={{'margin' : '20px auto'}}/>
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