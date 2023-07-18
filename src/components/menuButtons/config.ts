import { menuButtonsConfigType } from '../../types/menuButtonsConfig'

import data from '../../assets/icons/data.svg'
import rating from '../../assets/icons/rating.svg'
import store from '../../assets/icons/store.svg'
import bank from '../../assets/icons/bank.svg'

export const menuButtonsConfig: menuButtonsConfigType[] = [
    {
        id: 'data',
        icon: data,
        text: 'ДАННЫЕ'
    },
    {
        id: 'rating',
        icon: rating,
        text: 'РЕЙТИНГ'
    },
    {
        id: 'store',
        icon: store,
        text: 'МАГАЗИН'
    },
    {
        id: 'bank',
        icon: bank,
        text: 'БАНК'
    },
    {
        id: 'newgame',
        text: 'СОЗДАТЬ ИГРУ',
        bigSize: true
    },
    {
        id: 'inviteFrend',
        text: 'ПРИГЛАСИТЬ ДРУГА',
        bigSize: true
    },
]
