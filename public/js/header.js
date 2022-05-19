const nav = document.querySelector('#hamburger button')
nav.addEventListener('click', e => {
    nav.classList.toggle('open'); /* added class open si no está la desaparece*/
})