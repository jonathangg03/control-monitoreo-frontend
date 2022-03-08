import Link from 'next/link'
import ReplacementList from '../../components/ReplacementList'
import Title from '../../components/Title'
import mockReplacements from './mockReplacements'
import styles from './styles'

const Keys = () => {
  return (
    <>
      <Title content={'Control de equipo de bodega'} />
      <form className='search'>
        <input
          type='text'
          placeholder='Buscar equipo'
          required
          name='search'
          onClick={() => {}}
        />
        <button>Buscar</button>
      </form>
      <ReplacementList replacements={mockReplacements} />
      <Link href='/equipo/nuevo'>
        <a>Agregar registro</a>
      </Link>
      <style jsx>{styles}</style>
    </>
  )
}

export default Keys
