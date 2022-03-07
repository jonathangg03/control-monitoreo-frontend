import css from 'styled-jsx/css'
import { colors, fontSizes } from '../../styles/themes'

const styles = css`
  header {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }

  div {
    display: flex;
    align-items: center;
  }

  div p {
    font-size: ${fontSizes.big};
    padding-left: 8px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  li {
    padding-left: 15px;
  }

  a {
    font-size: ${fontSizes.main};
    text-decoration: none;
    color: ${colors.selector};
  }
`

export default styles
