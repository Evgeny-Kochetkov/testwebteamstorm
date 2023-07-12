/* Fonts */
const font = 'Philosopher, sans-serif'
/* Colors */
const black = '#1A1A1A'
const whiteColor = '#FFF'
const darkgray = '#242222'
const driedBlood = '#361414'
const smoke = '#D9D9D9'
const pink = '#FBB'
const yellow = '#FFC93D'
const yellow50opacity = 'rgba(255, 201, 61, 0.5)'

const gradientOne = 'rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 52.60%'
const gradientTwo = 'rgba(0, 0, 0, 0.00) 49.48%, rgba(0, 0, 0, 0.40) 100%'

const shadow = '0px 4px 20px 0px rgba(0, 0, 0, 0.70)'
const textShadow = '0px 2px 2px rgba(0, 0, 0, 0.50)'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopM: '1140px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopM: `(max-width: ${size.laptopM})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
}

export const theme = {
    font,
    colors: {
        black,
        whiteColor,
        darkgray,
        driedBlood,
        smoke,
        pink,
        yellow,
        yellow50opacity
    },
    gradientOne,
    gradientTwo,
    shadow,
    textShadow
}