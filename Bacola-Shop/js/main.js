const product_carousel = document.getElementsByClassName("product_carousel")[0]
const cart_count = document.getElementsByClassName("header__bottom__right__cart__count")[0]
const cartContent = document.getElementsByClassName("cartContent")[0]
let countCart = parseInt(cart_count.innerText)
let cartId = 0

let PRODUCTS = [
    {
        id: "1",
        price: 19,
        title: "Field Roast Chao Cheese Creamy Original",
        img: "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
        count: 0
    },

    {
        id: "2",
        price: 3.29,
        title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg",
        count: 0
    },
    {
        id: "3",
        price: 10.58,
        title: "Blue Diamond Almonds Lightly Salted",
        img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg",
        count: 0
    }
]

let CART = [

]

class Cart {
    constructor(title, price, img, count) {
        this.id = cartId,
            this.title = title,
            this.price = price,
            this.img = img,
            this.count = count
    }
}


// Cart
PRODUCTS.forEach((card) => {
    console.log(card)
    product_carousel.innerHTML +=
        ` <div class="bestSellers__right__bottom__card">
                        <a class="bestSellers__right__bottom__card__top">
                            <img src="${card.img}" alt="">
                        </a>
                        <div class="bestSellers__right__bottom__card__middle">
                            <h5>${card.title}</h5>
                            <span>IN STOCK</span>
                            <ul class="star_list">
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><span class="star_list_count">1</span></li>
                            </ul>
                            <span class="past_price">$24.09</span>
                            <span class="new_price">$ ${card.price}</span>
                        </div>
                        <div class="bestSellers__right__bottom__card__bottom addToCartBtn">
                            <button onclick="AddToCart(${card.id})" >Add to cart</button>
                        </div>
                        <span class="discponunt">19%</span>
                        <span class="productFeature">ORGANIC</span>
                        <span class="fullScreen"><i class="fa-solid fa-compress"></i></span>
                        <span class="likeMe"><i class="fa-regular fa-heart"></i></span>
                    </div> `
})

const addToCartBtn = document.getElementsByClassName("addToCartBtn")

function AddToCart(id) {
    let index = PRODUCTS.find((item) => item.id == id)

    // let some = PRODUCTS.indexOf((item) => item.id == id)
    // console.log(some, "dsad")
    console.log(CART.length)
    if (CART.length > 0) {
        if(CART.id == index.id){
            CART[index].count 
            console.log("message", CART[index].count)
        }

    }
    else {
        let productCart = new Cart(index.title, index.price, index.img, index.count)
        cartId += CART.id
        CART.push(productCart)
        console.log("2222")
    }
    countCart++
console.log(cartId += CART.id)

    cart_count.textContent = countCart

    RenderModalCart(CART)
}

console.log(PRODUCTS)

function RenderModalCart(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array)
        cartContent.innerHTML += `

        <div class="cartContent__top">
                            <div>
                                <img src="${array[i].img}" alt="">
                                <div class="deleteBtn" id="deleteWithCart">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div class="cartContent__top__text">
                                <h5 class="cartContent__top__title">
                                   ${array[i].title}
                                </h5>
                                <h6><span>2 x</span>$ ${array[i].price}</h6>
                            </div>
                        </div>
                        <div class="cartContent__middle">
                            <span>Subtotal: </span>
                            <span class="price">$ ${array[i].price}</span>
                            <div class="cartContent__middle__btns">
                                <button>View Cart</button>
                                <button>Checkout</button>
                            </div>
                        </div>
                        <div class="cartContent__bottom">
                            <span> We reduce shipping prices to only 2.49 €! </span>
                        </div>


        `
    }
}

// Location modal and categories button
$(".header__bottom__middle__location").click(() => {
    $("#locationModal").slideToggle(500)
    $("body").toggleClass("changeStyle")
})

$("#categoriesBtn").click(() => {
    $(".map__wrapper__left__list").slideToggle(300)
    $(".map__wrapper__left__bottom").slideToggle(300)
})


// OWL CAROUSEL
$('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.product_carousel').owlCarousel({
    // loop: true,
    responsiveClass: true,
    // autoplay: true,
    // autoplayTimeout: 5000,
    margin: 1,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})


RenderModalCart()