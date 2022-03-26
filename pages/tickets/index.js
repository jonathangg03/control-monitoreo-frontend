import Link from 'next/link'
import { useState } from 'react'
import TicketList from '../../components/TicketList'
import Title from '../../components/Title'
import useFilter from '../../hooks/useFilter'
import { colors, fontSizes } from '../../styles/themes'
import Filter from '../../components/Filter'
import { getTickets } from '../../services/tickets'

const Tickets = ({ tickets }) => {
  const [searchValue, setSearchValue] = useState('')
  const { filteredRecords: filteredTickets, handleSearch } = useFilter({
    searchValue,
    registers: tickets,
    filter: 'client'
  })

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <Title content={'Control de tickets'} />
      <Filter
        handleSearch={handleSearch}
        handleSearchChange={handleSearchChange}
        searchValue={searchValue}
        inputPlaceholder='Filtrar por nombre de cliente'
      />
      <TicketList tickets={filteredTickets || []} />
      <Link href='/tickets/nuevo'>
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
  const tickets = await getTickets()

  return { props: { tickets: tickets } }
}

export default Tickets
