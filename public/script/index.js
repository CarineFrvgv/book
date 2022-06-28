
function popup () {
  const body = document.body
  const popup = document.querySelector('.popup')
  popup.style.display = 'flex'
  body.style.overflow = 'hidden'
}

function closePopup () {
  const body = document.body
  const popup = document.querySelector('.popup')
  popup.style.display = 'none'
  body.style.overflow = 'scroll'
}

function popupDelete () {
  const body = document.body
  const popup = document.querySelector('.popupDelete')
  popup.style.display = 'flex'
  body.style.overflow = 'hidden'
}

function closePopupDelete() {
  const body = document.body
  const popup = document.querySelector('.popupDelete')
  popup.style.display = 'none'
  body.style.overflow = 'scroll'
}
