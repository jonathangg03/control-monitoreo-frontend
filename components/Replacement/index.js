import propTypes from 'prop-types'
import Link from 'next/link'
import { BsPencilSquare, BsXLg } from 'react-icons/bs'
import styles from './styles'

const Replacement = ({
  client,
  date,
  hour,
  caseNumber,
  partNumber,
  seriesNumber,
  units,
  partName,
  engineerName,
  description,
  _id
}) => {
  return (
    <>
      <p>{client}</p>
      <p>{date}</p>
      <p>{hour}</p>
      <p>{caseNumber}</p>
      <p>{partNumber}</p>
      <p>{seriesNumber}</p>
      <p>{units}</p>
      <p>{partName}</p>
      <p>{engineerName}</p>
      <p>{description}</p>
      <div>
        <Link href={`/equipo/${_id}/editar`}>
          <a title='Editar'>
            <BsPencilSquare />
          </a>
        </Link>
        <Link href={`/equipo/${_id}/eliminar`}>
          <a className='delete' title='Eliminar'>
            <BsXLg />
          </a>
        </Link>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

Replacement.propTypes = {
  client: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  hour: propTypes.string.isRequired,
  caseNumber: propTypes.string.isRequired,
  partNumber: propTypes.string.isRequired,
  seriesNumber: propTypes.string.isRequired,
  units: propTypes.number.isRequired,
  partName: propTypes.string.isRequired,
  engineerName: propTypes.string.isRequired,
  description: propTypes.string.isRequired
}

export default Replacement
