import Image from 'next/image'
import Icon from '../../public/Icon.png'
import styles from './styles'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header>
        <div>
          <Image src={Icon} alt='cesa-logo' width={65.5} height={64} />
          <p>Control de monitoreo</p>
        </div>
        <ul>
          <li>
            <Link href='/llaves'>
              <a>Llaves</a>
            </Link>
          </li>
          <li>
            <Link href='/equipo'>
              <a>Equipo de bodega</a>
            </Link>
          </li>
          <li>
            <Link href='/tickets'>
              <a>Tickets</a>
            </Link>
          </li>
          <li>
            <Link href='/alertas'>
              <a>Alertas</a>
            </Link>
          </li>
        </ul>
      </header>
      <style jsx>{styles}</style>
    </>
  )
}

export default Header
