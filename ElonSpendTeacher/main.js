const PRODUCTS = [
    {
        id: 1,
        img: "https://dadaspendelonmoney.netlify.app/images/big-mac.jpg",
        name: "Big Mac",
        price: 2
    },
    {
        id: 2,
        img: "https://dadaspendelonmoney.netlify.app/images/coca-cola-pack.jpg",
        name: "Coca-Cola Pack",
        price: 5
    },
    {
        id: 3,
        img: "https://dadaspendelonmoney.netlify.app/images/big-mac.jpg",
        name: "Flip Flops",
        price: 50000
    },
    {
        id: 4,
        img: "https://dadaspendelonmoney.netlify.app/images/book.jpg",
        name: "Book",
        price: 12
    }, {
        id: 5,
        img: "https://dadaspendelonmoney.netlify.app/images/lobster-dinner.jpg",
        name: "Lobster Dinner",
        price: 45
    },
    {
        id: 6,
        img: "https://dadaspendelonmoney.netlify.app/images/big-mac.jpg",
        name: "Flip Flops",
        price: 3000
    }
]

const BASKET = [

]

let amount

const ELON__MONEY = 187000000000

const cardContainer = document.querySelector(".products")

PRODUCTS.forEach(product => {
    const cardDiv = document.createElement("div")
    const cardImg = document.createElement("img")
    const cardName = document.createElement("h5")
    const cardPrice = document.createElement("h6")
    const cardBottomDiv = document.createElement("div")
    const cardSellBtn = document.createElement("button")
    const cardCountInput = document.createElement("input")
    const cardBuyBtn = document.createElement("button")

    cardBottomDiv.className = "products__card__bottom"
    cardDiv.className = "products__card";
    cardImg.src = product.img;
    cardName.textContent = product.name;
    cardPrice.textContent = product.price;
    cardSellBtn.textContent = "Sell";
    cardBuyBtn.textContent = "Buy";
    cardCountInput.type = "number";
    cardCountInput.value = 0;

    cardBottomDiv.append(cardSellBtn, cardCountInput, cardBuyBtn);
    cardDiv.append(cardImg, cardName, cardPrice, cardBottomDiv);
    cardContainer.appendChild(cardDiv);


    cardBuyBtn.addEventListener("click", () => {
        let itemIndexInBasket = BASKET.findIndex((item) => item.product.id == product.id)
        if (itemIndexInBasket == -1) {
            console.log("yoxdur")
            BASKET.push({
                product: product,
                count: 1
            })
        }
        else {
            console.log("var")
            BASKET[itemIndexInBasket].count++
        }

        cardCountInput.value++
        updateUI()
        console.log(BASKET)
    })

    cardSellBtn.addEventListener("click", () => {
        let itemIndexInBasket = BASKET.findIndex((item) => item.product.id == product.id)
        if (itemIndexInBasket == -1) return

        if (cardCountInput.value <= 1) {
            BASKET.splice(itemIndexInBasket, 1)
        }
        else if (cardCountInput.value > 1) {
            BASKET[itemIndexInBasket].count--
        }
        cardCountInput.value--
        updateUI()
        console.log(BASKET)
    })

    cardCountInput.addEventListener("keyup", (event) => {
        if (event.target.value.startsWith("0")) {
            event.target.value = event.target.value.slice(1)
        }
        if (event.target.value == "") event.target.value = 0

        if (amount < event.target.value * product.price) {
            event.target.value = (amount - (amount % product.price)) / product.price
        }

        let itemIndexInBasket = BASKET.findIndex(item => item.product.id == product.id)
        
        if(itemIndexInBasket == -1){
            //add 
            BASKET.push({
                product: product,
                count: event.target.value
            })
        }
        else if(event.target.value == 0){
            BASKET.splice(itemIndexInBasket, 1)
        }
        else{
            BASKET[itemIndexInBasket].count = event.target.value
        }


        updateUI()
    })
})

function updateUI() {
    writeAmountToDocument(convertToDolarFormat(calculateChange()))
}


function writeAmountToDocument(amount) {
    document.getElementById("cash").textContent = amount
}


console.log(calculateChange())
function calculateChange() {
    let basketTotal = 0
    BASKET.forEach((item) => {
        basketTotal += item.product.price * item.count
    })

    amount = ELON__MONEY - basketTotal
    return amount
}

function convertToDolarFormat(amount) {

    let myArr = amount.toString().split("").reverse()

    let newamount = ""
    for (let i = 0; i < myArr.length; i++) {
        newamount += myArr[i]
        if (i % 3 == 2 && i != myArr.length - 1) newamount += ","
    }

    return '$' + newamount.toString().split("").reverse().join("")
}