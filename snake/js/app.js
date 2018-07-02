function createFifteenDivs(parent) {
    for(i = 0; i < 12; i++) {
        for(j = 0; j < 12; j++) {
            parent.appendChild(document.createElement('div')).className = 'col-1 divus' 
        }
    }
}
const parent = document.querySelector('.row')

createFifteenDivs(parent)

let snake = document.querySelector('.col-1')

let floor = document.querySelectorAll('.col-1')

let scoreSpan = document.querySelector('#score')

document.addEventListener('keydown', changeDirection)

function changeDirection(e) {
    direction = e.key
}

let direction = 'ArrowRight';
let score = 0
let foodId = Math.floor(Math.random() * 144)
floor[foodId].classList.add('food')
document.querySelector('#score').textContent = score

function snakeMoving() {
    if (id === foodId) {
        resetFood()
    }
    switch(direction) {
        case 'ArrowLeft': if(id % 12 !== 0 && id !== 0) {
            changeSnakeCoord(-1)
        } else {
            changeSnakeCoord(11)
        }
        break;
        case 'ArrowRight': if((id - 11) % 12 !== 0) {
            changeSnakeCoord(1)
        } else {
            changeSnakeCoord(-11)
        }
        break;
        case 'ArrowUp': if(id > 11) {
            changeSnakeCoord(-12)
        } else {
            changeSnakeCoord(132)
        }
        break;
        case 'ArrowDown': if(id < 132) {
            changeSnakeCoord(12)
        } else {
            changeSnakeCoord(-132)
        }
        break;
    }
}

setInterval(snakeMoving, 100)

var id = 0
changeSnakeCoord(0)
function changeSnakeCoord(num) {
    floor[id].classList.remove('snake')
    id += num
    floor[id].classList.add('snake')
}

function resetFood() {
    floor[foodId].classList.remove('food')
    foodId = Math.floor(Math.random() * 144)
    floor[foodId].classList.add('food')
    score++
    scoreSpan.textContent = score
}

function lose() {
    alert('YOU\'RE LOSED')
}

console.log(floor)