import css from 'styled-jsx/css'
import { fonts, colors } from '../../styles/themes'

export const global = css.global`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: ${fonts.main};
    font-size: 62.5%;
  }

  body {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 15px 20px;
    color: ${colors.main};
  }
`

export const layout = css`
  p {
    font-size: 1.5rem;
  }
`
