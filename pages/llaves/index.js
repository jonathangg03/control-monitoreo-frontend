import Link from 'next/link'
import KeyUserList from '../../components/KeyUserList'
import Title from '../../components/Title'
import mockKeys from './mockKeys'
import styles from './styles'

const Keys = () => {
  return (
    <>
      <Title content={'Control de llaves'} />
      <KeyUserList keyUsers={mockKeys} />
      <Link href='/newKeyUser'>
        <a>Agregar registro</a>
      </Link>
      <style jsx>{styles}</style>
    </>
  )
}

export default Keys
