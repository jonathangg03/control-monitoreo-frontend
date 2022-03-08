import KeyUser from '../KeyUser'
import styles from './styles'

const KeyUserList = ({ keyUsers }) => {
  return (
    <>
      <ul className='table'>
        <li className='col'>
          <h2>Nombre del retirante</h2>
        </li>
        <li className='col'>
          <h2>Nombre de la llave</h2>
        </li>
        <li className='col'>
          <h2>Fecha</h2>
        </li>
        <li className='col'>
          <h2>Número de unidades</h2>
        </li>
        <li className='col'>
          <h2>Hora del retiro</h2>
        </li>
        <li className='col'>
          <h2>Hora de devolución</h2>
        </li>
        {keyUsers.map((keyUser) => (
          <KeyUser key={keyUser._id} {...keyUser} />
        ))}
      </ul>
      <style jsx>{styles}</style>
    </>
  )
}

export default KeyUserList
