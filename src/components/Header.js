import React from 'react'
import '../styles/header.scss'
import logo from '../assets/logo.svg'
import HeaderGroupedButton from './HeaderGroupedButton'

function Header() {
  return (
      <header>
        <div className="wrapper">
            <div className="col">
                  <img src={logo} alt="Logo" className="header__logo" />
                  <nav>
                      <ul>
                          <li><HeaderGroupedButton title="buy" /></li>
                          <li><HeaderGroupedButton title="sell" /></li>
                          <li><a href="/">create an offer</a></li>
                          <li><a href="/">wallet</a></li>
                          <li><HeaderGroupedButton title="gift card hub" /></li>
                          <li><a href="/">become a vendor</a></li>
                      </ul>
                  </nav>
            </div>
        </div>
    </header>
  )
}

export default Header