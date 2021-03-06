import { useForm } from 'react-hook-form'
import styles from './styles'

const KeyForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Nombre del retirante:</p>
          <input type='text' {...register('user', { required: true })} />
          {errors.user && <p className='error__message'>Retirante requerido</p>}
        </label>
        <label>
          <p>Nombre de llave:</p>
          <input type='text' {...register('keyName', { required: true })} />
          {errors.keyName && (
            <p className='error__message'>Nombre de llave requerido</p>
          )}
        </label>
        <label>
          <p>Fecha:</p>
          <input type='date' {...register('date', { required: true })} />
          {errors.date && <p className='error__message'>Fecha requerida</p>}
        </label>
        <label>
          <p>Hora de retiro:</p>
          <input type='time' {...register('retirement', { required: true })} />
          {errors.retirement && (
            <p className='error__message'>Hora requerida</p>
          )}
        </label>
        <label>
          <p>Número de unidades:</p>
          <input type='number' {...register('units', { required: true })} />
          {errors.units && (
            <p className='error__message'>Unidades requeridas</p>
          )}
          <label>
            <p>Hora de devolución:</p>
            <input type='time' {...register('delivery', { required: true })} />
            {errors.delivery && (
              <p className='error__message'>Hora requerida</p>
            )}
          </label>
        </label>
        <button>Agregar</button>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default KeyForm
