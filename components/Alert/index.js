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

export default Ticket
