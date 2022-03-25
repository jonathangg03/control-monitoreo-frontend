import css from 'styled-jsx/css'

const styles = css`
  .table {
    display: grid;
    overflow-x: auto;
    list-style: none;
    grid-template-rows: 45px;
    margin-bottom: 10px;
    padding: 10px;
    margin-bottom: 15px;
  }

  ul::-webkit-scrollbar {
    height: 7px;
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

  li {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 185px) 70px;
    gap: 10px;
    padding: 10px 0 10px 10px;
  }

  li:nth-child(odd) {
    background-color: white;
  }

  li:nth-child(even) {
    background-color: #f1f1f1;
  }
`

export default styles
