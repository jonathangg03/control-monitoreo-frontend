import { useState } from 'react'
import { useRouter } from 'next/router'
import { colors, fontSizes } from '../../../styles/themes'
import { deleteKey } from '../../../services/keys'

const KeyDelete = () => {
  const [error, setError] = useState()
  const router = useRouter()

  const handleDelete = async (event) => {
    if (event.target.textContent === 'Cancelar') {
      router.push('/llaves')
    } else {
      const response = await deleteKey({ id: router.query.id })
      response.error ? setError(response) : router.push('/llaves')
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
      <p className='errorReq'>{error?.message}</p>
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

          .errorReq {
            margin-top: 20px;
            text-align: center;
            font-size: ${fontSizes.main};
            color: red;
          }
        `}
      </style>
    </section>
  )
}

export default KeyDelete
