import '../../styles/partials/iconbutton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function IconButtonFA({btnClassName, iconVal}) {
  return (
    <button className={"icon__btn btn " + (btnClassName)}>
      <FontAwesomeIcon icon={iconVal} />
    </button>
  )
}

export default IconButtonFA