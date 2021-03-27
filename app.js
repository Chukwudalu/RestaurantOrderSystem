const display = document.querySelector(".display-div")
const submitButton = document.querySelector(".button")
const tableInput = document.querySelector(".tableInput")
const dishInput = document.querySelector(".dishInput")

// IMAGES TO BE USED
const images = ["./images/chicken.jpg", "./images/rice.jpg"]

// EVENT LISTENTERS
submitButton.addEventListener("click", queueDish)

// QUEUE DISH 
function queueDish(e) {
    e.preventDefault()
    
    const table_no = tableInput.value;
    const dish = dishInput.value;
    
    const mealContainer = document.createElement("div");
    mealContainer.classList.toggle("mealContainer")

    const dishContainer = document.createElement("div");
    dishContainer.classList.toggle("dishContainer")

    const imageContainer = document.createElement("div");
    imageContainer.classList.toggle("imageContainer")

    const img = document.createElement("img");
    img.src = `${selectImage()}`;


    const dishDetail = document.createElement("div");
    dishDetail.classList.toggle("dishDetail")
    const tableNum = document.createElement("h2");
    tableNum.classList.toggle("tableNum")
    const dishName = document.createElement("h2")
    dishName.classList.toggle("dishName")

    tableNum.innerHTML = table_no
    dishName.innerHTML = dish

    const buttonContainer = document.createElement("div")
    buttonContainer.classList.toggle("button-div")
    const servedButton = document.createElement("button");
    servedButton.classList.toggle("button")
    servedButton.innerHTML = 'served';

    display.appendChild(mealContainer)
    mealContainer.appendChild(imageContainer);
    mealContainer.appendChild(dishContainer);
    imageContainer.appendChild(img);
    dishContainer.appendChild(dishDetail);
    dishContainer.appendChild(buttonContainer)
    dishDetail.appendChild(tableNum);
    dishDetail.appendChild(dishName)
    buttonContainer.appendChild(servedButton);
    
    servedButton.addEventListener("click", removeDish)
   
    
}

function removeDish(e) {
    const element = e.target.parentElement.parentElement.parentElement
    element.remove()
}

// RANDOMLY SELECT IMAGE
function selectImage() {
    let randomNumber = Math.random()*1
    let index = (num) => {
        return num > 0.5 ? Math.ceil(num):Math.floor(num)
    }
    let image = images[index(randomNumber)]
    return image
}


