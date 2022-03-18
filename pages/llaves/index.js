import { useState } from 'react'
import Link from 'next/link'
import useFilter from '../../hooks/useFilter'
import Filter from '../../components/Filter'
import KeyUserList from '../../components/KeyUserList'
import Title from '../../components/Title'
import getKeys from '../../services/getKeys'
import { colors, fontSizes } from '../../styles/themes'

const Keys = ({ keys }) => {
  const [searchValue, setSearchValue] = useState('')
  const { filteredRecords: filteredKeys, handleSearch } = useFilter({
    searchValue,
    registers: keys,
    filter: 'keyName'
  })

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <Title content={'Control de llaves'} />
      <Filter
        handleSearch={handleSearch}
        handleSearchChange={handleSearchChange}
        searchValue={searchValue}
        inputPlaceholder='Filtrar por nombre de cliente'
      />
      <KeyUserList keyUsers={filteredKeys || []} />
      <Link href='/llaves/nuevo'>
        <a>Agregar registro</a>
      </Link>
      <style jsx>{`
        a {
          font-size: ${fontSizes.main};
          color: ${colors.selector};
          text-decoration: none;
        }

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
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  const keys = await getKeys()

  return { props: { keys } }
}

export default Keys
