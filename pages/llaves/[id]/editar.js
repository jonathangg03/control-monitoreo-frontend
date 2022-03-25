import Title from '../../../components/Title'
import KeyForm from '../../../components/KeyForm'
import { getKey } from '../../../services/keys'

const KeyEdit = ({ keyElement }) => {
  return (
    <>
      <Title content='Editar registro de llave' />
      <KeyForm keyElement={keyElement} />
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { params } = ctx
  const { id } = params
  const key = await getKey({ id })

  return { props: { keyElement: key } }
}

export default KeyEdit
