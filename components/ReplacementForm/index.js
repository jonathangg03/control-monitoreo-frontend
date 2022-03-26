import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { sendReplacement, editReplacement } from '../../services/replacements'
import styles from './styles'

const ReplacementForm = ({ replacement }) => {
  const router = useRouter()
  const [error, setError] = useState()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ defaultValues: replacement || {} })

  const onSubmit = async (values) => {
    if (replacement) {
      const response = await editReplacement({
        replacement: values,
        id: replacement._id
      })
      response.error ? setError(response) : router.push('/equipo')
    } else {
      const response = await sendReplacement({ replacement: values })
      response.error ? setError(response) : router.push('/equipo')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Número de caso:</p>
          <input
            type='number'
            {...register('caseNumber', { required: true })}
          />
          {errors.caseNumber && (
            <p className='error__message'>Caso requerida</p>
          )}
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
          <input
            type='text'
            {...register('seriesNumber', { required: true })}
          />
          {errors.seriesNumber && (
            <p className='error__message'>Serie requeridas</p>
          )}
        </label>
        <label>
          <p>Unidades:</p>
          <input
            type='number'
            min={1}
            {...register('units', { required: true })}
          />
          {errors.units && <p className='error__message'>Unidades requerido</p>}
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
        <p className='errorReq'>{error?.message}</p>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default ReplacementForm
