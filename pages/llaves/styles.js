import css from 'styled-jsx/css'

const styles = css`
  .table {
    display: grid;
    grid-template-columns: repeat(6, 185px);
    overflow: auto;
    gap: 10px 20px;
    grid-auto-rows: 100px;
  }

  h2 {
    font-weight: 300;
    font-size: 1.8rem;
    border: 1px solid black;
  }

  div {
    border: 1px solid black;
  }
`

export default styles
