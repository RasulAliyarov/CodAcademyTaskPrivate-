let buyBtn = document.getElementsByClassName("buyBtn")
let sellBtn = document.getElementsByClassName("sellBtn")
let input = document.getElementsByTagName("input")
let products = document.getElementsByClassName("products__card")
let price = document.getElementsByClassName("price")
let dsad = document.getElementsByClassName("app__products__sum")[0]
let noneCash = document.getElementById("cash")
let totalSpan = document.getElementById("total")

let divBlock = document.createElement("div")
divBlock.className = "receipt__block__content__product"
let spanb = document.createElement("span")
spanb.className = "span"
let spanname = document.createElement("span")
spanname.className = "span"
let spansum = document.createElement("span")
spansum.className = "span"


let receiptContent = document.getElementById("receipt__block__content")
let productName = document.getElementsByClassName("product__name")
let cash = 100

let ostatok = cash;
let inputrezerv
let inputrezervobnuleniya
let b
let name = ""
let total

for (let i = 0; i < products.length; i++) {
    buyBtn[i].addEventListener("click", (e) => {
        sellBtn[i].style.backgroundColor = "red"
        ostatok = ostatok - (parseInt(price[i].innerText))
        if (ostatok < 0 || ostatok == 0) {
            alert("Pul yoxdu Elon!");
            ostatok = ostatok + (parseInt(price[i].innerText))
            return
        }
        input[i].value++
        noneCash.style.display = "none";
        sellBtn[i].style.backgroundColor = "red";
        name = productName[i].innerText
        b = input[i].value
        total = input[i].value * (parseInt(price[i].innerText))
        addda()

        return
    });

    sellBtn[i].addEventListener("click", (e) => {
        input[i].value--
        if (input[i].value < 0) {
            input[i].value = 0
            return;
        }
        console.log(productName[i].innerText)
        name = productName[i].innerText

        ostatok = ostatok + (parseInt(price[i].innerText))
        total = total - (parseInt(price[i].innerText))
        if (input[i].value == 0) {
            sellBtn[i].style.backgroundColor = "rgb(220, 220, 220)"
        }
        addda()
        return

    });

    input[i].addEventListener("input", (e) => {
        if (ostatok == 0) {
            console.log("Not money")
            return
        }

        if (input[i].value == "") {  // obnuleniye
            input[i].value = 0
        }

        if (input[i].value > 0) { //udalayet 0
            let inputrezervobnuleniya = parseInt(e.target.value)
            input[i].value = ""
            input[i].value = inputrezervobnuleniya
        }
        ///////////////////////////////////////////
        let da = input[i].value.match(/[0-9]/g)

        if ((input[i].value * parseInt((price[i]).innerText)) > cash) {
            input[i].value = Math.floor(ostatok / parseInt((price[i]).innerText))
        }

        /////////////////////////////////////
        if (ostatok == 100) {
            ostatok = cash - (parseInt(price[i].innerText) * input[i].value)
            console.log("==100")
        }
        else {
            if (inputrezerv > input[i].value) {
                ostatok = cash - (parseInt(price[i].innerText) * input[i].value)
                console.log("inprezerv1")
            }
            else {
                ostatok = ostatok - (parseInt(price[i].innerText) * input[i].value)
                console.log("inprezerv2")
            }
            console.log("inprezerv")
        }

        ////////////////////////////////////////
        if (input[i].value.length == 2) {

            let zapas = input[i].value
            input[i].value = 0
            ostatok = cash
            input[i].value = zapas

            console.log(zapas)

            if ((input[i].value * parseInt((price[i]).innerText)) > ostatok) {
                input[i].value = Math.floor(1, ostatok / parseInt((price[i]).innerText))
            }
            else {
                console.log("message")
            }

            if (ostatok == 100) {
                ostatok = cash - (parseInt(price[i].innerText) * input[i].value)
            }
            else {
                if (inputrezerv > input[i].value) {
                    ostatok = cash - (parseInt(price[i].innerText) * input[i].value)
                }
                else {
                    ostatok = ostatok - (parseInt(price[i].innerText) * input[i].value)
                    console.log(ostatok)
                }
            }
        }


        ////////////////////////////////////////
        name[i] = productName[i].innerText
        sellBtn[i].style.backgroundColor = "red";
        if (input[i].value == 0) {
            sellBtn[i].style.backgroundColor = "rgb(220, 220, 220)"
        }
        inputrezerv = input[i].value
        addda()
    })
}

function addda() {
    dsad.innerHTML = (`
    <h1 id="cash"><span>$</span> ${ostatok}</h1>
    `)
    
    spanname.textContent = b
    spanb.textContent = name
    spansum.textContent = total

    divBlock.append(spanname, spanb, spansum)

    receiptContent.prepend(divBlock)

    totalSpan.textContent = total
}

