import '../../styles/partials/regularbutton.scss'

function RegularButton({ btnClassName, title }) {
  return (
    <button className={"regular__btn btn " + (btnClassName)}>{title}</button>
  )
}

export default RegularButton