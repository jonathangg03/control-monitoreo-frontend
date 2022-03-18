import css from 'styled-jsx/css'
import { colors, fontSizes } from '../../styles/themes'

const styles = css`
  form {
    margin-bottom: 20px;
  }

  input {
    width: 50%;
    height: 35px;
    margin-bottom: 10px;
    outline: none;
    padding: 0px 5px;
    border: none;
    border-bottom: 1px solid #f1f1f1;
    color: ${colors.main};
  }

  input::placeholder {
    color: #c1c1c1;
  }

  button {
    display: block;
    background-color: ${colors.selector};
    border: none;
    color: white;
    padding: 10px 40px;
    border-radius: 5px;
    font-size: ${fontSizes.main};
  }
`

export default styles
