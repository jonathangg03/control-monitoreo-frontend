import Title from '../../../components/Title'
import AlertForm from '../../../components/AlertForm'
import { getAlerts } from '../../../services/alerts'

const AlertEdit = ({ alert }) => {
  return (
    <>
      <Title content='Editar alerta' />
      <AlertForm alert={alert} />
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { params } = ctx
  const { id } = params
  const alert = await getAlerts({ id })

  return { props: { alert: alert } }
}

export default AlertEdit
