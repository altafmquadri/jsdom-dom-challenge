let counter = document.getElementById("counter")

function likeCounterIncrement() {
    let numCounter = parseInt(counter.innerText)
    let ul = document.getElementsByClassName('likes')[0]
    let li = ul.querySelector(`[data-id="${numCounter}"]`)
    
    if (li) {
        let currentCount = parseInt(li.dataset.count)
        li.dataset.count = ++currentCount
        li.innerText = `${li.dataset.id} has been like ${li.dataset.count} time(s)`
    } else {
        li = document.createElement("li")
        li.dataset.id = numCounter
        li.dataset.count = 1
        li.innerText = `${li.dataset.id} has been like ${li.dataset.count} time(s)` 
        ul.appendChild(li)
    }
}   

function numCounterIncrementer () {
    let numCounter = parseInt(counter.innerText)
    numCounter++
    counter.innerText = numCounter
}

function numCounterDecrementer () {
    let numCounter = parseInt(counter.innerText)
    if (numCounter > 0) {
        numCounter--
        counter.innerText = numCounter
    }
}

let interval = window.setInterval(numCounterIncrementer, 1000)

let minusButton = document.getElementById('minus')
let plusButton = document.getElementById('plus')
let heartButton = document.getElementById('heart')
let submitButton = document.getElementById('submit')

const theButtons =[minusButton, plusButton, heartButton, submitButton]

function toggleButtons() {
    theButtons.forEach(function(button) {
        button.disabled = !button.disabled
    })
}

document.body.addEventListener('click', function (e) {
    if (e.target.id === 'minus') {
        numCounterDecrementer()
    } else if (e.target.id === 'plus') {
        numCounterIncrementer()
    } else if (e.target.id === 'heart') {
        likeCounterIncrement()
}
    if (e.target.id === 'pause') {
        toggleButtons()
        window.clearInterval(interval)
        e.target.id = 'resume'
        e.target.innerText = 'resume'
    } else if (e.target.id === 'resume') {
        toggleButtons()
        interval = window.setInterval(numCounterIncrementer, 1000)
        e.target.id = 'pause'
        e.target.innerText = 'pause'
    } 
})

let form = document.getElementById('comment-form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    let commentText = e.target[0].value
    let p = document.createElement("p")
    p.innerText = commentText
    let list = document.getElementById('list')
    list.appendChild(p)
    e.target[0].value = ""
})