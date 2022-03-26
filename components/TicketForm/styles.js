import css from 'styled-jsx/css'
import { colors, fontSizes } from '../../styles/themes'

const styles = css`
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0px 20px;
  }
  p {
    font-size: ${fontSizes.main};
  }

  input {
    width: 100%;
    height: 35px;
    margin-bottom: 20px;
    outline: none;
    padding: 0px 5px;
    border: none;
    border-bottom: 1px solid #f1f1f1;
    color: ${colors.main};
  }

  input::placeholder {
    color: #c1c1c1;
  }

  .error__message {
    display: inline-block;
    font-size: 1.4rem;
    margin-left: 20px;
    color: red;
  }

  button {
    display: block;
    background-color: ${colors.selector};
    border: none;
    color: white;
    padding: 10px 40px;
    border-radius: 5px;
    font-size: ${fontSizes.main};
    width: 200px;
  }

  .errorReq {
    margin-top: 20px;
    color: red;
  }

  @media screen and (max-width: 1070px) {
    form {
      grid-template-columns: 1fr;
      gap: 0px;
    }
  }
`

export default styles
