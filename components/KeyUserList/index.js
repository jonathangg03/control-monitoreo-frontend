import propTypes from 'prop-types'
import KeyUser from '../KeyUser'
import styles from './styles'

const KeyUserList = ({ keyUsers }) => {
  return (
    <>
      <ul className='table'>
        <li className='col'>
          <h2>Nombre del retirante</h2>
          <h2>Nombre de la llave</h2>
          <h2>Fecha</h2>
          <h2>Número de unidades</h2>
          <h2>Hora del retiro</h2>
          <h2>Hora de devolución</h2>
        </li>
        {keyUsers.map((keyUser) => (
          <li key={keyUser._id}>
            <KeyUser {...keyUser} />
          </li>
        ))}
      </ul>
      <style jsx>{styles}</style>
    </>
  )
}

KeyUserList.propTypes = {
  keyUsers: propTypes.array.isRequired
}

export default KeyUserList
