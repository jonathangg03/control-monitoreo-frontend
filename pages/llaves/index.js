import Title from '../../components/Title'
import styles from './styles'

const Keys = () => {
  return (
    <>
      <Title content={'Control de llaves'} />

      <div className='table'>
        <div className='col'>
          <h2>Nombre del retirante</h2>
          <div>
            <p>Test</p>
          </div>
          <div>
            <p>Test</p>
          </div>
          <div>
            <p>Test</p>
          </div>
        </div>
        <div className='col'>
          <h2>Nombre de la llave</h2>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
        </div>
        <div className='col'>
          <h2>Fecha</h2>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
        </div>
        <div className='col'>
          <h2>Número de unidades</h2>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
        </div>
        <div className='col'>
          <h2>Hora del retiro</h2>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
        </div>
        <div className='col'>
          <h2>Hora de devolución</h2>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Keys
