import '../../styles/partials/iconbutton.scss'

function IconButtonIO({btnClassName, iconVal}) {
  return (
    <button className={"icon__btn " + (btnClassName)}>
      <ion-icon name={iconVal}></ion-icon>
    </button>
  )
}

export default IconButtonIO