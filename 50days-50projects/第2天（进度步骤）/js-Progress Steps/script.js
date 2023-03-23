const lines = document.querySelectorAll('.line')
const prev = document.getElementById('Prev')
const next = document.getElementById('Next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length

        next.classList.remove('click')

    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
        prev.classList.remove('click')
    }
    update()

})


function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
                // lines[currentActive - 1].classList.add('click')
        } else {
            circle.classList.remove('active')
                // lines.classList.remove('click')
        }
    })

    // const actives = document.querySelectorAll('.active')
    // progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}