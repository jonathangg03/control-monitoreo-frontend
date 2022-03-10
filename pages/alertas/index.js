import Link from 'next/link'
import AlertsList from '../../components/AlertsList'
import Title from '../../components/Title'
import { colors, fontSizes } from '../../styles/themes'

const Alerts = () => {
  return (
    <>
      <Title content={'Control de alertas'} />
      <form className='search'>
        <input
          type='text'
          placeholder='Buscar alerta'
          required
          name='search'
          onClick={() => {}}
        />
        <button>Buscar</button>
      </form>
      <AlertsList alerts={[]} />
      <Link href='/alertas/nuevo'>
        <a>Agregar registro</a>
      </Link>
      <style jsx>{`
        a {
          font-size: ${fontSizes.main};
          color: ${colors.selector};
          text-decoration: none;
        }

        form {
          margin-bottom: 20px;
        }

        input {
          width: 50%;
          height: 35px;
          margin-bottom: 10px;
          outline: none;
          padding: 0px 5px;
          border: none;
          border-bottom: 1px solid #f1f1f1;
          color: ${colors.main};
        }

        input::placeholder {
          color: #c1c1c1;
        }

        button {
          display: block;
          background-color: ${colors.selector};
          border: none;
          color: white;
          padding: 10px 40px;
          border-radius: 5px;
          font-size: ${fontSizes.main};
        }
      `}</style>
    </>
  )
}

export default Alerts
