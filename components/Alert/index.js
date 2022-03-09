import propTypes from 'prop-types'
import styles from './styles'

const Ticket = ({
  client,
  source,
  date,
  alertHour,
  reportHour,
  contact,
  monitorName,
  ticketOpened,
  description,
  actions
}) => {
  return (
    <>
      <p>{client}</p>
      <p>{source}</p>
      <p>{date}</p>
      <p>{alertHour}</p>
      <p>{reportHour}</p>
      <p>{contact}</p>
      <p>{monitorName}</p>
      <p>{ticketOpened}</p>
      <p>{description}</p>
      <p>{actions}</p>
      <style jsx>{styles}</style>
    </>
  )
}

Ticket.propTypes = {
  client: propTypes.string.isRequired,
  source: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  alertHour: propTypes.string.isRequired,
  reportHour: propTypes.string.isRequired,
  contact: propTypes.string,
  monitorName: propTypes.string.isRequired,
  ticketOpened: propTypes.number,
  description: propTypes.string.isRequired,
  actions: propTypes.string.isRequired
}

export default Ticket
