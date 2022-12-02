let noteTitle = document.getElementById("noteTitle")
let textArea = document.getElementsByTagName("textarea")[0]

let colorBtn = document.querySelectorAll(".app__content__decor__colors__color")

let cards = document.getElementsByClassName("app__cards")[0]
// let   = document.getElementsByClassName("app__cards__card")[0]
// let cardTitle = document.getElementsByClassName("app__cards__card__title")[0]

function changeColor(cardDiv, cardDivTtitle) {
    for (let i = 0; i < colorBtn.length; i++) {
        colorBtn[i].onclick = () => {
            // cardDivTtitle.style.backgroundColor = "red"

            if ([i] == 0) {
                cardDivTtitle.style.backgroundColor = "rgb(240, 98, 146)"
                cardDiv.style.borderColor = "rgb(240, 98, 146)"
            }
            else if ([i] == 1) {

                cardDivTtitle.style.backgroundColor = "rgb(186, 104, 200)"
                cardDiv.style.borderColor = "rgb(186, 104, 200)"

            }
            else if ([i] == 2) {

                cardDivTtitle.style.backgroundColor = "rgb(79, 195, 247)"
                cardDiv.style.borderColor = "rgb(79, 195, 247)"

            }
            else if ([i] == 3) {

                cardDivTtitle.style.backgroundColor = "rgb(255, 213, 79)"
                cardDiv.style.borderColor = "rgb(255, 213, 79)"

            }
            else if ([i] == 4) {

                cardDivTtitle.style.backgroundColor = "rgb(174, 213, 129)"
                cardDiv.style.borderColor = "rgb(174, 213, 129)"

            }
        }
    }
}




savebtn.onclick = () => {
    let inputTitle = document.createElement("h5")
    let inputText = document.createElement("p")
    let deletebtn = document.createElement("buuton")
    let cardDivText = document.createElement("div")
    let savebtn = document.getElementById("savebtn")
    let cardDiv = document.createElement("div")
    let cardDivTtitle = document.createElement("div")

    cardDivTtitle.className = "app__cards__card__title"
    cardDiv.className = "app__cards__card"
    cardDivText.className = "app__cards__card__text"
    deletebtn.className = "deletebtn"

        changeColor(cardDiv, cardDivTtitle)

    inputTitle.textContent = noteTitle.value
    inputText.textContent = textArea.value

    cardDivTtitle.append(inputTitle, deletebtn)
    cardDivText.appendChild(inputText)

    cardDiv.append(
        cardDivTtitle, cardDivText
    )
    cards.appendChild(cardDiv)


    noteTitle.value = ""
    textArea.value = ""


    deletebtn.onclick = () => {
        cards.removeChild(cardDiv)
    }

}
