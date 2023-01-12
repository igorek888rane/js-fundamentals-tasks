const btn = document.querySelector('#myBtn')
const spoiler = document.querySelector('#spoiler')

btn.addEventListener('click', openAndCloseSpoiler)


function openAndCloseSpoiler() {
    spoiler.classList.toggle('closed')
    if (spoiler.classList.contains('closed')) {
        document.removeEventListener('keydown', closeSpoilerEsc)
    } else {
        document.addEventListener('keydown', closeSpoilerEsc)
    }

}


function closeSpoilerEsc(e) {
    if (e.code === 'Escape') {
        console.log(e);
        openAndCloseSpoiler()
    }
}



