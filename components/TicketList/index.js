import propTypes from 'prop-types'
import Ticket from '../Ticket'
import styles from './styles'

const TicketList = ({ tickets }) => {
  return (
    <>
      <ul className='table'>
        <li className='col'>
          <h2>Número de caso</h2>
          <h2>Cliente</h2>
          <h2>Fecha</h2>
          <h2>Hora de ingreso</h2>
          <h2>Hora primer respuesta</h2>
          <h2>ingeniero asignado</h2>
          <h2>Descripción</h2>
          <h2>Acciones tomadas</h2>
        </li>
        {tickets.map((ticket) => (
          <li key={ticket._id}>
            <Ticket {...ticket} />
          </li>
        ))}
      </ul>
      <style jsx>{styles}</style>
    </>
  )
}

TicketList.propTypes = {
  tickets: propTypes.array.isRequired
}

export default TicketList
