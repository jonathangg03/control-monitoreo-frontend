import Image from 'next/image'
import Logo from '../../public/logo.png'
import styles from './styles'

const Banner = () => {
  return (
    <>
      <div>
        <Image src={Logo} alt='CESA-Logo' width={179.4} height={64} />
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Banner
