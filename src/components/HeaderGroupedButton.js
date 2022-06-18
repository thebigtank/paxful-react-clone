import '../styles/headergroupedbutton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeaderGroupedButton({ title }) {
  return (
    <div className="header__grouped-btn">
        <a href="/" className="btn">{title}</a>
      <button className="dropdown">
        <FontAwesomeIcon icon="fa-solid fa-angle-down" />
      </button>
    </div>
  )
}

export default HeaderGroupedButton