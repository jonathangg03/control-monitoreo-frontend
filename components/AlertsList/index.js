import propTypes from 'prop-types'
import Alert from '../Alert'
import styles from './styles'

const AlertsList = ({ alerts }) => {
  return (
    <>
      <ul className='table'>
        <li className='col'>
          <h2>Cliente</h2>
          <h2>Equipo</h2>
          <h2>Fecha</h2>
          <h2>Hora de alerta</h2>
          <h2>Hora de reporte</h2>
          <h2>ingeniero contactado</h2>
          <h2>Técnico de monitoreo</h2>
          <h2>Ticket abierto</h2>
          <h2>Descripción</h2>
          <h2>Acciones tomadas</h2>
        </li>
        {alerts.map((alert) => (
          <li key={alert._id}>
            <Alert {...alert} />
          </li>
        ))}
      </ul>
      <style jsx>{styles}</style>
    </>
  )
}

AlertsList.propTypes = {
  alerts: propTypes.array.isRequired
}

export default AlertsList
