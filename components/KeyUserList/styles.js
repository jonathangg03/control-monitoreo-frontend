import css from 'styled-jsx/css'

const styles = css`
  .table {
    display: grid;
    grid-template-columns: repeat(6, 185px);
    overflow-x: auto;
    gap: 10px 20px;
    grid-auto-rows: 100px;
    grid-template-rows: 25px;
    list-style: none;
    grid-auto-rows: 50px;
    margin-bottom: 10px;
  }

  ul::-webkit-scrollbar {
    height: 5px;
  }

  ul::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  ul::-webkit-scrollbar-thumb {
    background: #d3d3d3f7;
    border-radius: 10px;
  }

  h2 {
    font-weight: 300;
    font-size: 1.8rem;
  }
`

export default styles
