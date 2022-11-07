const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
})

function dragstart(event) {
    item.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend() {
    item.className = 'item'
}

function dragover(e) {
    event.preventDefault()
}

function dragenter(e) {
    e.target.classList.add('hovered')
}

function dragleave(e) {
    e.target.classList.remove('hovered')
}

function drop(e) {
    e.target.classList.remove('hovered')
    e.target.append(item)
}