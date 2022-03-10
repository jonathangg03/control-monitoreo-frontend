import { useForm } from 'react-hook-form'
import styles from './styles'

const TicketForm = () => {
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
          {errors.ticket && <p className='error__message'>Caso requerido</p>}
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
          <p>Hora de ingreso:</p>
          <input type='time' {...register('enterHour', { required: true })} />
          {errors.enterHour && <p className='error__message'>Hora requerida</p>}
        </label>
        <label>
          <p>Hora de primer respuesta:</p>
          <input
            type='time'
            {...register('firstReplyHour', { required: true })}
          />
          {errors.firstReplyHour && (
            <p className='error__message'>Hora requerida</p>
          )}
        </label>
        <label>
          <p>Ingeniero asignado:</p>
          <input type='text' {...register('engineer', { required: true })} />
          {errors.engineer && (
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
        <label>
          <p>Acciones tomadas:</p>
          <input type='text' {...register('actions', { required: true })} />
          {errors.actions && (
            <p className='error__message'>Acciones requeridas</p>
          )}
        </label>
        <button>Agregar</button>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default TicketForm
