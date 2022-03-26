import propTypes from 'prop-types'
import Link from 'next/link'
import { BsPencilSquare, BsXLg } from 'react-icons/bs'
import styles from './styles'

const Ticket = ({
  caseNumber,
  client,
  date,
  enterHour,
  firstReplyHour,
  engineer,
  description,
  actions,
  _id
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
      <div>
        <Link href={`/tickets/${_id}/editar`}>
          <a title='Editar'>
            <BsPencilSquare />
          </a>
        </Link>
        <Link href={`/tickets/${_id}/eliminar`}>
          <a className='delete' title='Eliminar'>
            <BsXLg />
          </a>
        </Link>
      </div>
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
