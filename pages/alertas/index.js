import Link from 'next/link'
import AlertsList from '../../components/AlertsList'
import Title from '../../components/Title'
import mockAlerts from './mockAlerts'
import styles from './styles'

const Alerts = () => {
  return (
    <>
      <Title content={'Control de alertas'} />
      <form className='search'>
        <input
          type='text'
          placeholder='Buscar alerta'
          required
          name='search'
          onClick={() => {}}
        />
        <button>Buscar</button>
      </form>
      <AlertsList alerts={mockAlerts} />
      <Link href='/alertas/nuevo'>
        <a>Agregar registro</a>
      </Link>
      <style jsx>{styles}</style>
    </>
  )
}

export default Alerts
