import '../styles/regularbutton.scss'

function RegularButton({ btnColor, backgroundColor, title }) {
  return (
    <button className="regular__btn" style={{ color: btnColor, background: backgroundColor, border: backgroundColor }}>{title}</button>
  )
}

export default RegularButton