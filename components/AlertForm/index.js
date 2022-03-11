import { useForm } from 'react-hook-form'
import styles from './styles'

const AlertForm = () => {
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
          <p>Cliente:</p>
          <input type='text' {...register('client', { required: true })} />
          {errors.client && <p className='error__message'>Cliente requerido</p>}
        </label>
        <label>
          <p>Equipo:</p>
          <input type='text' {...register('source', { required: true })} />
          {errors.source && <p className='error__message'>Equipo requerido</p>}
        </label>
        <label>
          <p>Fecha:</p>
          <input type='date' {...register('date', { required: true })} />
          {errors.date && <p className='error__message'>Fecha requerida</p>}
        </label>
        <label>
          <p>Hora de alerta:</p>
          <input type='time' {...register('alertHour', { required: true })} />
          {errors.alertHour && <p className='error__message'>Hora requerida</p>}
        </label>
        <label>
          <p>Hora de reporte:</p>
          <input type='time' {...register('reportHour', { required: true })} />
          {errors.reportHour && (
            <p className='error__message'>Hora requerida</p>
          )}
        </label>
        <label>
          <p>Persona contactada:</p>
          <input type='text' {...register('contact', { required: true })} />
          {errors.contact && (
            <p className='error__message'>Ingeniero requerido</p>
          )}
        </label>
        <label>
          <p>Correo de la persona contactada:</p>
          <input
            type='email'
            {...register('contactEmail', { required: true })}
          />
          {errors.contactEmail && (
            <p className='error__message'>Correo requerido</p>
          )}
        </label>
        <label>
          <p>Técnico de monitoreo:</p>
          <input
            type='text'
            {...register('monitorName', { required: true })}
            placeholder='Nombre del tecnico de monitoreo.'
          />
          {errors.monitorName && (
            <p className='error__message'>Tecnico requerido</p>
          )}
        </label>
        <label>
          <p>Ticket abierto:</p>
          <input
            type='number'
            {...register('ticketOpened')}
            placeholder='Sí se abrió.'
          />
        </label>
        <label>
          <p>Descripción:</p>
          <input
            type='text'
            {...register('description', { required: true })}
            placeholder='Breve descripción de la alerta'
          />
          {errors.description && (
            <p className='error__message'>Descripción requerida</p>
          )}
        </label>
        <label>
          <p>Acciones tomadas:</p>
          <input
            type='text'
            {...register('actions', { required: true })}
            placeholder='Describir especificamente si se llamó al ingeniero, se envio correo, y demás detalles.'
          />
          {errors.actions && (
            <p className='error__message'>Acciones requeridas</p>
          )}
        </label>
        <label>
          <p>Comentarios extra:</p>
          <input
            type='text'
            {...register('extraComments')}
            placeholder='Indicar demás información importante'
          />
        </label>
        <button>Agregar</button>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default AlertForm