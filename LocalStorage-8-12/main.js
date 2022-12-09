const tBody = document.getElementById("tBody")
const sectionProducts = document.getElementsByClassName("products__section__products")[0]
const cartBody = document.getElementById("cartBody")
const addBtn = document.getElementById("addBtn")
const addBtnCart = document.getElementsByClassName("addBtnCart")

const nameInp = document.getElementById("nameID")
const categoryInp = document.getElementById("categoryID")
const brandInp = document.getElementById("brandID")
const priceInp = document.getElementById("priceID")

let id = 1

let ProductsArray = []
let cartArr = []


if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(ProductsArray))
    localStorage.setItem("cartProducts", JSON.stringify(ProductsArray))
}
else {
    ProductsArray = JSON.parse(localStorage.getItem("products"))
    cartArr = JSON.parse(localStorage.getItem("cartProducts"))
}

// console.log(cartArr)
class Products {
    constructor(id, name, brand, category, price) {
        this.id = id,
            this.name = name,
            this.category = category,
            this.brand = brand,
            this.price = price
    }
}

addBtn.addEventListener("click", () => {
    let name = nameInp.value
    let category = categoryInp.value
    let brand = brandInp.value
    let price = priceInp.value

    let product = new Products(id, name, category, brand, price)

    ProductsArray.push(product)
    id++
    localStorage.setItem("products", JSON.stringify(ProductsArray))

    renderUI(ProductsArray)


    nameInp.value = ""
    categoryInp.value = ""
    brandInp.value = ""
    priceInp.value = ""
})


function renderUI(array) {
    let innerHTML = ""

    for (let i = 0; i < array.length; i++) {
        innerHTML += (
            `
            <div class="card" style="width: 18rem;">
            <img src="https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="card-img-top" alt="...">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5 class="card-title">${array[i].name}</h5>
                    <h5>$ ${array[i].price}</h5>
                </div>
                <button class="btn btn-warning w-100 mt-3 addBtnCart">Add to cart</button>
            </div>
              </div>
            `
        )
    }

    sectionProducts.innerHTML = innerHTML

    for (let i = 0; i < array.length; i++) {
        addBtnCart[i].addEventListener("click", () => {

            cartArr.push(array[i].id, array[i].name, array[i].category, array[i].brand, array[i].price)
            localStorage.setItem("cartProducts", JSON.stringify(ProductsArray))

            tBody.innerHTML += (
                `
            <tr>
            <td class="table-primary">${array[i].id}</td>
            <td class="table-primary">${array[i].name}</td>
            <td class="table-primary">${array[i].category}</td>
            <td class="table-primary">${array[i].brand}</td>
            <td class="table-primary">${array[i].price}</td>
            `)

        })
    }
}
renderUI(ProductsArray)

console.log(ProductsArray)