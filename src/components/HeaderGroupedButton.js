import '../styles/headergroupedbutton.scss'

function HeaderGroupedButton({ title }) {
  return (
    <div className="header__grouped-btn">
        <a href="/" className="btn">{title}</a>
        <button className="dropdown"><ion-icon name="chevron-down-outline"></ion-icon></button>
    </div>
  )
}

export default HeaderGroupedButton