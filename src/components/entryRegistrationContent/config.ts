import { socialEntryButtonsConfigType } from '../../types/socialEntryButtonsConfigType'

import googleIcon from '../../assets/icons/google.svg'
import appleIcon from '../../assets/icons/apple.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import yandexIcon from '../../assets/icons/yandex.svg'

export const socialEntryButtonsConfig: socialEntryButtonsConfigType[]  = [
    {
        id: 'guestAccountBtn',
        text: 'Гостевой аккаунт(только просмотр)'
    },
    {
        id: 'googleBtn',
        text: 'Google',
        icon: googleIcon
    },
    {
        id: 'appleBtn',
        text: 'Apple',
        icon: appleIcon
    },
    {
        id: 'facebookBtn',
        text: 'Facebook',
        icon: facebookIcon
    },
    {
        id: 'yandexBtn',
        text: 'Yandex',
        icon: yandexIcon
    }
]