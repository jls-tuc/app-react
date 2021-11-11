
import './BotonMenu.scss'
import imagen2 from '../../../assets/imagenes/laptops.png'
import { Link } from 'react-router-dom'

type Props = {
  imagen: string
  pag_inicio: string
  nombre?: string
}
const BotonMenu: React.FC<Props> = ({ imagen, pag_inicio, nombre }) => {
  return (
    <div className={`col-12 centrado`}>
      <div className={`card-boton centrado`}>
        <img className={`img-boton`} src={imagen2} alt="" />
      </div>
      <Link to={pag_inicio}>
        <div className='text-secondary uppercase fw-bold fs-7 centrado pt-3'>{nombre}</div>
      </Link>
    </div>
  )
}
export { BotonMenu }