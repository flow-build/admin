import { darken, lighten } from 'polished'

const primaryColor = '#0062ff'
const secondaryColor = '#82c43c'

export default {
  colors: {
    primary: {
      light: lighten(0.1, primaryColor),
      base: primaryColor,
      dark: darken(0.1, primaryColor)
    },
    secondary: {
      light: lighten(0.1, secondaryColor),
      base: secondaryColor,
      dark: darken(0.1, secondaryColor)
    },
    yellow: '#ffe58f',
    red: '#ffa39e',
    green: '#b7eb8f',
    blue: '#91d5ff',
    light: '#fafafa',
    gray: '#8E8E8E',
    white: '#ffffff',
    black: '#222222'
  },
  font: {
    family:
      "Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    },
    weight: {
      light: 300,
      normal: 400,
      bold: 700
    },
    height: {
      medium: 1.4,
      heading: 1.2
    }
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  border: {
    radius: '0.4rem'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: 'all 250ms cubic-bezier(0.77, 0, 0.175, 1)'
}
