import Title from '../../../components/Title'
import ReplacementForm from '../../../components/ReplacementForm'
import { getReplacement } from '../../../services/replacements'

const ReplacementEdit = ({ replacement }) => {
  return (
    <>
      <Title content='Editar salida de equipo' />
      <ReplacementForm replacement={replacement} />
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { params } = ctx
  const { id } = params
  const replacement = await getReplacement({ id })

  return { props: { replacement: replacement } }
}

export default ReplacementEdit
