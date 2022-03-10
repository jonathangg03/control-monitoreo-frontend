import { useForm } from 'react-hook-form'
import styles from './styles'

const ReplacementForm = () => {
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
          <p>Número de caso:</p>
          <input type='number' {...register('ticket', { required: true })} />
          {errors.ticket && <p className='error__message'>Caso requerida</p>}
        </label>
        <label>
          <p>Cliente:</p>
          <input type='text' {...register('client', { required: true })} />
          {errors.client && <p className='error__message'>Cliente requerido</p>}
        </label>
        <label>
          <p>Fecha:</p>
          <input type='date' {...register('date', { required: true })} />
          {errors.date && <p className='error__message'>Fecha requerida</p>}
        </label>
        <label>
          <p>Hora:</p>
          <input type='time' {...register('hour', { required: true })} />
          {errors.hour && <p className='error__message'>Hora requerida</p>}
        </label>
        <label>
          <p>Número de parte:</p>
          <input type='text' {...register('partNumber', { required: true })} />
          {errors.partNumber && (
            <p className='error__message'>Parte requerida</p>
          )}
        </label>
        <label>
          <p>Número de serie:</p>
          <input type='number' {...register('units', { required: true })} />
          {errors.units && (
            <p className='error__message'>Unidades requeridas</p>
          )}
        </label>
        <label>
          <p>Unidades:</p>
          <input type='text' {...register('contact', { required: true })} />
          {errors.contact && (
            <p className='error__message'>Ingeniero requerido</p>
          )}
        </label>
        <label>
          <p>Nombre del equipo:</p>
          <input type='text' {...register('partName', { required: true })} />
          {errors.partName && (
            <p className='error__message'>Equipo requerido</p>
          )}
        </label>
        <label>
          <p>Nombre del Ingeniero:</p>
          <input
            type='text'
            {...register('engineerName', { required: true })}
          />
          {errors.engineerName && (
            <p className='error__message'>Ingeniero requerido</p>
          )}
        </label>
        <label>
          <p>Descripción:</p>
          <input type='text' {...register('description', { required: true })} />
          {errors.description && (
            <p className='error__message'>Descripción requerida</p>
          )}
        </label>
        <button>Agregar</button>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default ReplacementForm
