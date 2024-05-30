
const width = "500px"
const height = "500px"

const container = document.getElementsByClassName("container")[0]
container.style.width = width
container.style.height = height

function start() {
    let count = parseInt(document.getElementById("second").value)
    if (!isNaN(count)) {
        for (let i = 0;i<count;i++) {
            let circle = document.createElement("div")
            circle.className = "circle"
            let size = Math.ceil(Math.random()*40+10)
            let left = Math.min(Math.round(Math.random()*parseInt(width)), parseInt(width)-size)
            let top = Math.min(Math.round(Math.random()*parseInt(height)), parseInt(height)-size)
            circle.style.width = size+"px"
            circle.style.height = size+"px"
            circle.style.position = "absolute"
            circle.style.left = left+"px"
            circle.style.top = top+"px"
            container.appendChild(circle)
            circle.addEventListener("click", (e) => {
                e.target.remove()
            })
        }
    }
}
