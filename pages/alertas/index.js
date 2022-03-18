import Link from 'next/link'
import { useState } from 'react'
import useFilter from '../../hooks/useFilter'
import AlertsList from '../../components/AlertsList'
import Filter from '../../components/Filter'
import Title from '../../components/Title'
import getAlerts from '../../services/getAlerts'
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
      <Filter
        handleSearch={handleSearch}
        handleSearchChange={handleSearchChange}
        searchValue={searchValue}
        inputPlaceholder='Filtrar por nombre de cliente'
      />
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
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  const alerts = await getAlerts()

  return { props: { alerts: alerts } }
}

export default Alerts
