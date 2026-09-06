const toggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#navigation')

if (toggle && navigation) {
  document.documentElement.classList.remove('no-js')
  const closeMenu = focusToggle => {
    toggle.setAttribute('aria-expanded', 'false')
    navigation.classList.remove('open')
    if (focusToggle) toggle.focus()
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true'
    toggle.setAttribute('aria-expanded', String(open))
    navigation.classList.toggle('open', open)
  })
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    closeMenu(false)
  }))
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true)
  })
}
