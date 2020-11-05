document.addEventListener('DOMContentLoaded',() => {
    const grid = document.querySelector('.grid')
    let tiles = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10

// building tiles of game pieces

    const aGamePiece = [
        [1,width+1,width*2+1,2],
        [width,width+1,width+2,width*2+2],
        [1,width+1,width*2+1,width*2],
        [width,width*2,width*2+1,width*2+2]
    ]

    const bGamePiece = [
        [0,width,width+1,width*2+1],
        [width+1,width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1,width+2,width*2,width*2+1]
    ]

    const cGamePeice = [
        [1,width,width+1,width+2],
        [1,width+2*2,width+2,width*3+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]

    const dGamePiece = [
        [1,2,width,width+2],
        [1,2,width,width+2],
        [1,2,width,width+2],
        [1,2,width,width+2]
    ]

    const eGamePiece = [
        [1, width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ]

    const theGamePieces = [aGamePiece, bGamePiece, cGamePeice, dGamePiece, eGamePiece]

    let currentPosition = 2
    let currentRotation = 0

    let random = Math.floor(Math.random()*theGamePieces.length)
    let current = theGamePieces[random][currentRotation]

    function draw() {
        current.forEach(index => {
            tiles[currentPosition + index].classList.add('tiles')
        })
    }

    function undraw() {
        current.forEach(index => {
            tiles[currentPosition + index].classList.add('tile')
        })
    }
