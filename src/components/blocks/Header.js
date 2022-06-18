import '../../styles/blocks/header.scss'
import logo from '../../assets/logo.svg'
import HeaderGroupedButton from '../partials/HeaderGroupedButton'
import RegularButton from '../partials/RegularButton'
import IconButtonFA from '../partials/IconButtonFA'
import IconButtonIO from '../partials/IconButtonIO'

function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="col">
          <IconButtonFA btnClassName="mobile__menu" iconVal="fa-solid fa-bars" />
          <img src={logo} alt="Logo" className="header__logo" />
          <ul className="main-menu">
              <li><HeaderGroupedButton title="buy" /></li>
              <li><HeaderGroupedButton title="sell" /></li>
              <li><a href="/">create an offer</a></li>
              <li><a href="/">wallet</a></li>
              <li><HeaderGroupedButton title="gift card hub" /></li>
              <li><a href="/">become a vendor</a></li>
          </ul>
        </div>
        <div className="col">
          <ul className="sub-menu">
              <li><a href="/">Log in</a></li>
              <li><RegularButton btnClassName="blue__btn" title="register" /></li>
              <li><IconButtonIO btnClassName="select__country" iconVal="earth-outline" /></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header