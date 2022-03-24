import { useRouter } from 'next/router'
import { colors, fontSizes } from '../../../styles/themes'
import { deleteAlert } from '../../../services/alerts'

const AlertDelete = () => {
  const router = useRouter()

  const handleDelete = async (event) => {
    if (event.target.textContent === 'Cancelar') {
      router.push('/alertas')
    } else {
      try {
        await deleteAlert({ id: router.query.id })
        router.push('/alertas')
      } catch (error) {
        console.log(error.message)
      }
    }
  }
  return (
    <section>
      <h1>¿Seguro que desea eliminar este registro?</h1>
      <div>
        <button type='button' onClick={handleDelete}>
          Cancelar
        </button>
        <button type='button' className='delete__button' onClick={handleDelete}>
          Eliminar
        </button>
      </div>
      <style jsx>
        {`
          section {
            min-height: 350px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          h1 {
            font-size: 2.4rem;
            font-weight: 300;
            text-align: center;
            margin-bottom: 20px;
          }

          div {
            display: flex;
            justify-content: center;
          }

          button {
            background-color: ${colors.selector};
            border: none;
            color: white;
            padding: 10px 40px;
            border-radius: 5px;
            font-size: ${fontSizes.main};
            margin: 0 10px;
          }

          .delete__button {
            background-color: #c50000;
          }
        `}
      </style>
    </section>
  )
}

export default AlertDelete
