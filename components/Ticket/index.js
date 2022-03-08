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

export default Ticket
