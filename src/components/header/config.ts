import { navButtonsConfigType } from '../../types/navButtonsConfigType'

import userIcon from '../../assets/icons/user.svg'
import settingsIcon from '../../assets/icons/settings.svg'
import soundIcon from '../../assets/icons/sound.svg'
import fullScreenIcon from '../../assets/icons/full_screen.svg'
import infoIcon from '../../assets/icons/info.svg'
import russiaIcon from '../../assets/icons/russia.svg'

export const navButtonsConfig: navButtonsConfigType[]  = [
    {
        id: 'userButton',
        icon: userIcon
    },
    {
        id: 'settingsButton',
        icon: settingsIcon
    },
    {
        id: 'soundButton',
        icon: soundIcon
    },
    {
        id: 'fullScreenButton',
        icon: fullScreenIcon
    },
    {
        id: 'infoButton',
        icon: infoIcon
    },
    {
        id: 'languageButton',
        icon: russiaIcon,
        text: 'ЯЗЫК',
        bigSize: true
    },
    {
        id: 'entryButton',
        text: 'ВХОД',
        red: true,
        bigSize: true
    }
]