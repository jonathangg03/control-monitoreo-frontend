import { useState } from 'react'
import Link from 'next/link'
import ReplacementList from '../../components/ReplacementList'
import useFilter from '../../hooks/useFilter'
import Title from '../../components/Title'
import Filter from '../../components/Filter'
import { getReplacements } from '../../services/replacements'
import { colors, fontSizes } from '../../styles/themes'

const Replacement = ({ replacements }) => {
  const [searchValue, setSearchValue] = useState('')
  const { filteredRecords: filteredReplacements, handleSearch } = useFilter({
    searchValue,
    registers: replacements,
    filter: 'client'
  })

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (
    <>
      <Title content={'Control de equipo de bodega'} />
      <Filter
        handleSearch={handleSearch}
        handleSearchChange={handleSearchChange}
        searchValue={searchValue}
        inputPlaceholder='Filtrar por nombre de cliente'
      />
      <ReplacementList replacements={filteredReplacements || []} />
      <Link href='/equipo/nuevo'>
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
  const replacements = await getReplacements()

  return { props: { replacements: replacements } }
}

export default Replacement
