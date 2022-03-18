import Title from '../../../components/Title'
import KeyForm from '../../../components/KeyForm'
import getKey from '../../../services/getKey'

const KeyEdit = ({ key }) => {
  return (
    <>
      <Title content='Editar registro de llave' />
      <KeyForm key={key} />
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { params } = ctx
  const { id } = params
  const key = await getKey({ id })

  return { props: { key } }
}

export default KeyEdit
