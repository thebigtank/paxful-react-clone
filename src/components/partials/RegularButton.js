import '../../styles/partials/regularbutton.scss'

function RegularButton({ btnClassName, title }) {
  return (
    <button className={"regular__btn " + (btnClassName)}>{title}</button>
  )
}

export default RegularButton