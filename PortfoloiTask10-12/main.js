const burgerBtn = document.getElementById("burgerBtn")
const burger__buttons = document.getElementsByClassName("burger__buttons")[0]
const colorSettings = document.getElementsByClassName("colorSettings")[0]
const colorSettings__content = document.getElementsByClassName("colorSettings__content")[0]

const blueBtn = document.getElementById("blue")
const redBtn = document.getElementById("red")
const orangeBtn = document.getElementById("orange")
const purpleBtn = document.getElementById("purple")
const greenBtn = document.getElementById("green")

const btnColor = document.getElementsByClassName("btnColor")
const textColor = document.getElementsByClassName("textColor")
const outline = document.getElementsByClassName("outline")

const appPortfolio__projects__block = document.getElementsByClassName("appPortfolio__projects__block")
const offcanvas_body = document.getElementsByClassName("offcanvas-body")[0]
const porfolioImg = document.getElementsByClassName("porfolioImg")

const appBlog__content__blocks__block = document.getElementsByClassName("appBlog__content__blocks__block")
const modal_body = document.getElementsByClassName("modal-body")[0]
const blog__img = document.getElementsByClassName("blog__img")

for (let i = 0; i < appBlog__content__blocks__block.length; i++) {
    let modalImg = blog__img[i].src
    appBlog__content__blocks__block[i].addEventListener("click", () => {
        modal_body.innerHTML = `
        <div class="blog__modal__img">
        <img src="${modalImg}" alt="">
    </div>
    <div class="blog__modal__text">
        <h1>CREATE A WORDPRESS THEME FROM SCRATCH</h1>
        <h5>Branding</h5>
        <p>
            Oki is a leading web design agency with an award-winning design team that creates
            innovative, effective websites that capture your brand, improve your conversion rates, and
            maximize your revenue to help grow your business and achieve your goals.
        </p>
        <p>
            In today’s digital world, your website is the first interaction consumers have with your
            business. That's why almost 95 percent of a user’s first impression relates to web design.
            It’s also why web design services can have an immense impact on your company’s bottom line.
        </p>
        <p>
            That’s why more companies are not only reevaluating their website’s design but also
            partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue
            for its clients. With over 50 web design awards under our belt, we're confident we can
            design a custom website that drives sales for your unique business.
        </p>
    </div>
        `
    })
}

for (let i = 0; i < appPortfolio__projects__block.length; i++) {
    appPortfolio__projects__block[i].addEventListener("click", () => {

        let dsda = porfolioImg[i].src
        console.log(dsda)

        offcanvas_body.innerHTML = `
        <div class="offcanvas_body_content">
        <div class="offcanvas_body_content_img">
        <img class="porfolioImg" src="${dsda}" alt="">
        </div>
        <div class="offcanvas_body_content_top">
            <span class="textColor">IMAGE FORMAT</span>
            <button class="outline textColor closeBtn"><i class="fa-solid fa-xmark textColor"></i>CLOSE</button>
        </div>
        <div class="offcanvas_body_content_info">
            <h6><i class="fa-regular fa-file-lines"></i> <span> Project:</span> WEBSITE</h6>
            <h6><i class="fa-solid fa-user-large"></i> <span> Client:</span> ENVATO</h6>
            <h6><i class="fa-solid fa-hourglass"></i> <span> Duration:</span> 3 MONTHS</h6>
            <h6><i class="fa-solid fa-code"></i><span> Technologies:</span> HTMLJAVASCRIPT</h6>
            <h6><i class="fa-solid fa-money-bill-1"></i> <span> Budget:</span> 1550 USD</h6>
        </div>
        <button class="btnColor"><i class="fa-solid fa-up-right-from-square"></i>PREVIEW</button>
    </div>
        `
    })

}

burgerBtn.addEventListener("click", () => {

    if (burger__buttons.classList.contains("active")) {
        burger__buttons.classList.remove("active")
        burgerBtn.style.height = "63px"
        burgerBtn.style.borderRadius = "50%"
        return

    }
    else {
        burger__buttons.classList.add("active")
        burgerBtn.style.height = "270px"
        burgerBtn.style.borderRadius = "20px"
    }

})

colorSettings.addEventListener("click", () => {
    if (colorSettings__content.classList.contains("active")) {
        colorSettings__content.classList.remove("active")
        console.log("1")
        return
    }
    else {
        colorSettings__content.classList.add("active")
        console.log("message")

    }

})


blueBtn.addEventListener("click", () => {
    changeColor("#2196F3")
})
redBtn.addEventListener("click", () => {
    changeColor("#fa4f43")
})
orangeBtn.addEventListener("click", () => {
    changeColor("#f35e1a")
})
purpleBtn.addEventListener("click", () => {
    changeColor("#f31acf")
})
greenBtn.addEventListener("click", () => {
    changeColor("#21f31a")
})

function changeColor(color) {
    for (let i = 0; i < textColor.length; i++) {
        textColor[i].style.color = color
        console.log("text")
    }

    for (let i = 0; i < btnColor.length; i++) {
        btnColor[i].style.backgroundColor = color
        console.log("btn")
    }
    for (let i = 0; i < outline.length; i++) {
        outline[i].style.border = `1px solid ${color} `
        console.log("outline")
    }
}
