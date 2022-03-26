import Title from '../../../components/Title'
import TicketForm from '../../../components/TicketForm'
import { getTicket } from '../../../services/tickets'

const TicketEdit = ({ ticket }) => {
  return (
    <>
      <Title content='Editar alerta' />
      <TicketForm ticket={ticket} />
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { params } = ctx
  const { id } = params
  const ticket = await getTicket({ id })

  return { props: { ticket: ticket } }
}

export default TicketEdit
