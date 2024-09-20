document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementsById('toggle')
    const nav = document.getElementsById('nav')
    toggle.addEventListener('click', () => {
        nav.classList.toggle('on')
      
    })
})