import { useState } from 'react'
import Link from 'next/link'
import AlertsList from '../../components/AlertsList'
import Title from '../../components/Title'
import getAlerts from '../../services/getAlerts'
import useFilter from '../../hooks/useFilter'
import { colors, fontSizes } from '../../styles/themes'

const Alerts = ({ alerts }) => {
  const [searchValue, setSearchValue] = useState('')
  const { filteredRecords: filteredAlerts, handleSearch } = useFilter({
    searchValue,
    registers: alerts,
    filter: 'client'
  })

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <Title content={'Control de alertas'} />
      <form className='search'>
        <input
          type='text'
          placeholder='Buscar alerta'
          required
          name='search'
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button type='button' onClick={handleSearch}>
          Buscar
        </button>
      </form>
      <AlertsList alerts={filteredAlerts || []} />
      <Link href='/alertas/nuevo'>
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
  const alerts = await getAlerts()

  return { props: { alerts: alerts } }
}

export default Alerts
