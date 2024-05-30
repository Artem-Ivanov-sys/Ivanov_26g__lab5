
var items = [
    {
        name: "Cook This Book",
        price: 22.69,
        max: 6,
        count: 1
    },
    {
        name: "The Beautiful Fall",
        price: 12.40,
        max: 1000,
        count: 1
    }
]

function check() {
    let checked = document.getElementsByClassName("checked")[0]
    checked.innerHTML = ""
    let total = 0
    for (let item of items) {
        if (item.count) {
            let elem = document.createElement("div")
            let name = document.createElement("p")
            let price = document.createElement("p")
            name.textContent = `x${item.count} ` + item.name
            price.textContent = `$${(item.count*item.price).toFixed(2)}`
            total += (item.count*item.price)
            elem.appendChild(name)
            elem.appendChild(price)
            checked.appendChild(elem)
        }
    }
    let elem = document.createElement("div")
    let name = document.createElement("p")
    let price = document.createElement("p")
    name.textContent = "Shipping"
    price.textContent = "Free"
    elem.appendChild(name)
    elem.appendChild(price)
    checked.appendChild(elem)

    document.getElementById("total").textContent = `$${total.toFixed(2)}`
}

function dec(id) {
    if (items[id].count > 0) {
        items[id].count --;
    }
    check()
}

function inc(id) {
    if (items[id].count < items[id].max) {
        items[id].count ++;
    } else {
        let body = document.getElementsByTagName("body")[0]
        let div = document.createElement("div")
        div.className = "modal"
        let a = document.createElement("a")
        div.appendChild(a)
        let text = document.createElement("p")
        text.textContent = `Максимальна кількість ${items[id].name} - ${items[id].max}`
        div.appendChild(text)
        a.onclick = () => {document.getElementsByClassName("modal")[0].remove()}
        body.appendChild(div)
    }
    check()
}

check()
