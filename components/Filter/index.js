import styles from './styles'

const Filter = ({
  handleSearch,
  handleSearchChange,
  searchValue,
  inputPlaceholder
}) => {
  return (
    <>
      <form className='search' onSubmit={handleSearch}>
        <input
          type='text'
          placeholder={inputPlaceholder}
          name='search'
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button>Buscar</button>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default Filter
