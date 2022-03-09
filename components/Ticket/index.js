import propTypes from 'prop-types'
import styles from './styles'

const Ticket = ({
  caseNumber,
  client,
  date,
  enterHour,
  firstReplyHour,
  engineer,
  description,
  actions
}) => {
  return (
    <>
      <p>{caseNumber}</p>
      <p>{client}</p>
      <p>{date}</p>
      <p>{enterHour}</p>
      <p>{firstReplyHour}</p>
      <p>{engineer}</p>
      <p>{description}</p>
      <p>{actions}</p>
      <style jsx>{styles}</style>
    </>
  )
}

Ticket.propTypes = {
  caseNumber: propTypes.number.isRequired,
  client: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  enterHour: propTypes.string.isRequired,
  firstReplyHour: propTypes.string.isRequired,
  engineer: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  actions: propTypes.string.isRequired
}

export default Ticket
