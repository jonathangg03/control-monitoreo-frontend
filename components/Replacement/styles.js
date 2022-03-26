import css from 'styled-jsx/css'
import { colors } from '../../styles/themes'

const styles = css`
  p {
    color: ${colors.main};
    font-size: 1.5rem;
  }

  div {
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
  }

  a {
    color: ${colors.selector};
  }

  .delete {
    color: red;
  }
`

export default styles
