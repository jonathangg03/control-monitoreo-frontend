import propTypes from 'prop-types'
import Link from 'next/link'
import { BsPencilSquare, BsXLg } from 'react-icons/bs'
import styles from './styles'

const KeyUser = ({ user, keyName, units, date, retirement, delivery, _id }) => {
  return (
    <>
      <p>{user}</p>
      <p>{keyName}</p>
      <p>{date}</p>
      <p>{retirement}</p>
      <p>{units}</p>
      <p>{delivery}</p>
      <div>
        <Link href={`/llaves/${_id}/editar`}>
          <a title='Editar'>
            <BsPencilSquare />
          </a>
        </Link>
        <Link href={`/llaves/${_id}/eliminar`}>
          <a className='delete' title='Eliminar'>
            <BsXLg />
          </a>
        </Link>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

KeyUser.propTypes = {
  user: propTypes.string.isRequired,
  keyName: propTypes.string.isRequired,
  units: propTypes.number.isRequired,
  date: propTypes.string.isRequired,
  retirement: propTypes.string.isRequired,
  delivery: propTypes.string.isRequired
}

export default KeyUser
