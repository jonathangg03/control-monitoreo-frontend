import Link from 'next/link'
import TicketList from '../../components/TicketList'
import Title from '../../components/Title'
import styles from './styles'

const Tickets = () => {
  return (
    <>
      <Title content={'Control de tickets'} />
      <form className='search'>
        <input
          type='text'
          placeholder='Buscar ticket'
          required
          name='search'
          onClick={() => {}}
        />
        <button>Buscar</button>
      </form>
      <TicketList tickets={[]} />
      <Link href='/tickets/nuevo'>
        <a>Agregar registro</a>
      </Link>
      <style jsx>{styles}</style>
    </>
  )
}

export default Tickets
