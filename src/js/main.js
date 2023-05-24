let context = document.querySelector('#context')

function hideContext(e) {
    if (e.button == 2 && e.target.dataset.context != undefined) return
    context.style.display = 'none'
    context.style.pointerEvent = 'none'
}

document.addEventListener('contextmenu', e => {
    e.preventDefault()

    if (e.target.dataset.context == undefined) return hideContext()

    context.style.display = ''
    context.style.pointerEvent = ''

    context.style.top = e.clientY + 10 + 'px'
    context.style.left = e.clientX + 10 + 'px'

    let bounding = context.getBoundingClientRect()

    if (bounding.bottom >= (window.innerHeight - 5 || document.documentElement.clientHeight - 5))
        context.style.top = e.clientY - bounding.height + 'px'
    
    if (bounding.right >= (window.innerWidth - 5 || document.documentElement.clientWidth - 5))
        context.style.left = e.clientX - bounding.width + 'px'
})

document.addEventListener('mousedown', hideContext)

let sidebar = false

document.querySelector('#sidebar #toggle').onclick = () => {
    console.log(sidebar)
    if (sidebar) {
        document.querySelector('#sidebar').style.width = '0px'
        document.querySelector('#sidebar #toggle').dataset.status = 'off'
        sidebar = false
    } else {
        document.querySelector('#sidebar').style.width = ''
        document.querySelector('#sidebar #toggle').dataset.status = 'on'
        sidebar = true
    }
}