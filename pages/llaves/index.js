import Link from 'next/link'
import KeyUserList from '../../components/KeyUserList'
import Title from '../../components/Title'
import styles from './styles'

const Keys = () => {
  return (
    <>
      <Title content={'Control de llaves'} />
      <form className='search'>
        <input
          type='text'
          placeholder='Buscar llave'
          required
          name='search'
          onClick={() => {}}
        />
        <button>Buscar</button>
      </form>
      <KeyUserList keyUsers={[]} />
      <Link href='/llaves/nuevo'>
        <a>Agregar registro</a>
      </Link>
      <style jsx>{styles}</style>
    </>
  )
}

export default Keys
