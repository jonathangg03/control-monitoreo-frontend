import propTypes from 'prop-types'
import Replacement from '../Replacement'
import styles from './styles'

const ReplacementList = ({ replacements }) => {
  return (
    <>
      <ul className='table'>
        <li className='col'>
          <h2>Cliente</h2>
          <h2>Fecha</h2>
          <h2>Hora</h2>
          <h2>Número de caso</h2>
          <h2>Número de parte</h2>
          <h2>Número de serie</h2>
          <h2>Cantidad de unidades</h2>
          <h2>Nombre del equipo</h2>
          <h2>Nombre del ingeniero</h2>
          <h2>Descripción</h2>
        </li>
        {replacements.map((replacement) => (
          <li key={replacement._id}>
            <Replacement {...replacement} />
          </li>
        ))}
      </ul>
      <style jsx>{styles}</style>
    </>
  )
}

ReplacementList.propTypes = {
  replacements: propTypes.array.isRequired
}

export default ReplacementList
