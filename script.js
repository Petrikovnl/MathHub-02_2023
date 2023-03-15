// alert('Hello!')

// confirm('You are learn JS')

// const skill = document.getElementById('skill')
// const isLove = document.getElementById('isLove')
// const string = document.getElementById('string')

// const skillText = prompt("Which language do you learn?", "Don't know yet")
// const isLoveValue = confirm('Do you like learning language?')

// console.log(isLoveValue)

// skill.innerText = skillText
// isLove.innerText = isLoveValue

// string.innerHTML = "str"

// const example = document.getElementById('example')
// console.log(example.innerText)
// console.log(example.innerHTML)

//STRING
// let a = 7 // a = "seven"
// const b = 8
// var c= 15

// const str1 = 'I\'m OK'
// const str2 = "Alex say's \"HELLO!\""
// const str3 = `I'm say ${str1}`

// console.log(str1)
// console.log(str2)
// console.log(str3)

//NUMBER + - / * **
// const num1 = 75+15
// const num2=79**9
// console.log(typeof "5")
// const rem=7+8+"5"
// console.log(rem)
// alert(num2)
// NaN Not a Number
// const rem2=8*"2"
// от -(2**53 -1) до (2*53 -1)

//BIGINT
// const bigint=10312334534635635735123n
// console.log(bigint)

//BOOLEAN
//true / false
// > < >= <= <== >== == ===
//const bool = 10 > 5
// const bool = "a" > 8
// console.log(bool)

//NULL
// const empty = null
// // let empty = null
// console.log(typeof empty)

//UNDEFINED
// let box = undefined
// console.log(box, typeof box)

//SYMBOL
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2)

//OBJECT
// const obj = {
//     name: "Sasha",
//     age: 19,
//     isHappy: true,
// }
// console.log(obj.name)
// console.log(obj['name'])

// obj.job = "Google"

// console.log(obj)

// const array = ["Аня",18, false]
// array[3]="Facebook"
// console.log(array)
// console.log(array[0])

// const userName = prompt ("Who are you?", "anonim")
// // userName == null

// if (userName === "admin") {
//     alert("Hello boss!")
// } else if (userName === "anonim" || !userName) {
//     alert("I don't know you")
// } else {
//     alert(`Hi ${userName}`)
// }

// const counts = prompt ("How much point do you want?", 10)
let i = 10
// while (i <= counts) {
//     console.log (i++)
//     // i = i+1
//     // i += 1
//     // i++
// }
// do {
//     console.log (i++)
// } while (i <= counts)

// console.log(i)

const arr = []
// arr.push(7)
// console.log(arr)

for (let i = 1; i <= 50; ++i) {
    arr.push(i)
}
// console.log(arr)

// for (item of arr) {
//     if (item%3===0) {
//         console.log (item)
//     }
// }

// const newArr=[]

// for (elem of arr) {
//     const marker = elem % 3
//     if (!marker) {
//         newArr.push(elem)
//     }
// }
// console.log(newArr)

// const obj = {
//     name: "Sasha",
//     age: 25,
//     city: "Voronej"
// }
// for (key in obj) {
//     console.log(key,obj[key])
// }

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomValue1 = getRandomNumInRange(0, 100)
    // const randomValue2 = getRandomNumInRange(0, 100)

    // let symbol
    // if (Math.random() >0.5) {
    //     symbol = "+"
    // } else {
    //     symbol = "-"
    // }
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)

    return task
    // return `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
}

const isPlus = Math.random() > 0.5

// console.log(randomValue)

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false
        // btnGame.innerText = "Проверить!" - унесли вниз, сократили код
        // toggleGameState()
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + "=" + gameState.rightAnswer
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        // btnGame.innerText = "Начать заново!"
        // toggleGameState()
    }
    toggleGameState()
    btnGame.innerText = (gameState.taskInProcess) ? "Проверить!" : "Начать заново!"
}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    // console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})

// if (isPlus) {
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// } else {
//     gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
// }

// console.log(gameElements)

// let num = 17

// let str = "17"

// let empty = null

// if ( str - num ) {

//     console.log('first')

// } else if (empty - num) {

//     console.log("second")

// } else if (str - empty) {

//     console.log("third")

// } else {

//     console.log("no one")

// }

// console.dir(document)
const choosedEl = document.querySelectorAll(".choosed_block-container > div")
const counterEl = document.querySelector(".choosed_block span")
// const choosedState = {
//     countElements: 0,
// }
// const chageCount = (value) => {
//     choosedState.countElements += value
//     counterEl.innerText = choosedState.countElements
// }
const choosedState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counterEl.innerText = this.countElements
    }
}

const eventFunc = (e) => {
    // console.log("click")
    //выбрать элемент с пом. класса
    // choosedEl[i].className="choosed_element"
    //запустить счетчик
    // e.target.className = "choosed_element"
    // counterEl.innerText = +counterEl.innerText + 1
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        // counterEl.innerText = +counterEl.innerText + 1
        choosedState.setCountValue(1)
    } else {
        e.target.className = ""
        // counterEl.innerText = counterEl.innerText - 1
        choosedState.setCountValue(-1)
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}
//choosedEl[2].removeEventListener("click", eventFunc) - удаление обработчика событий

// console.log( test1(3, 2))

// function test1(a, b) {

//     let pow = a ** b

// }

// console.log( test2(3, 2))

// const test2 = function(a, b) {

//     let pow = a ** b

// }


// const testValue = "string"

// function test(str) {

//     return str + null

// }

// console.log(test(testValue))

// const changeFunc = (num) => {

//     const result = (num / (Math.random() * 10)).toFixed

// }

// console.log(changeFunc(47))

// console.log(5 ** '2')
// const userText = prompt("give me number!")

// // пользователь отменил ввод

// console.log(userText - "7")
// const num = 21

// const result = (!null) ? (21 % 5) : ( 21 % 3)

// console.log(result)
// console.log(getArr())

// function getArr() {

//     const result = []

//     for (let i = 0; i < 3; i++) {

//         result.push(i + 5)

//     }

//     return result

// }
// console.log(getRandomLessTen())

// function getRandomLessTen() {

//     const num = 0

//     num += (Math.random * 10).toFixed()

//     return num

// }
// console.log(getRandomLessTen())

// const changeFunc = (num) => {

//     const result = (num / (Math.random() * 10)).toFixed

// }

// console.log(getRandomLessTen())
// const timeIsOver = () => {
//     alert("Time is out!")
// }
// // setTimeout(timeIsOver, 2000)
// // const alarm = setInterval(timeIsOver, 3000)

// const alarm = setInterval(() => {
//     let wantToSleep = confirm("Хотите ли вы спать?")
//     if (wantToSleep) {
//         console.log("tic")
//     }  else {
//         clearInterval(alarm)
//     }
// }, 3000);
// clearInterval(alarm)

const postBlock = document.querySelector(".post_block-container")
const showPostsBTN = document.querySelector(".post_block button")

// const   postTitle = document.querySelector(".post_block-container h3")
// const   postBody = document.querySelector(".post_block-container span")

// const func = () => {
//     return 5
// }
//same as
// const func = () => 5

function addPost(title, body) {
    const postTitle = document.createElement("h3")
    const postBody = document.createElement("span")
    const postItem = document.createElement("p")

    postItem.append(postTitle, postBody)
    postBlock.append(postItem)

    postTitle.innerText = title
    postBody.innerText = body
}

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        // {
        // console.log(res)
        // return res.json()
        // })
        .then(data => {
            for (item of data) {
                addPost(item.title, item.body)
            }
            // addPost(data[7].title, data[7].body)
            // console.log(data)
        })
        .catch(err => console.log(err.message))
    //     {
    //     console.log(err)
    //     console.log(err.message)
    // })
}

showPostsBTN.onclick = () => { getPosts() }

// function createPost(title, body, userId) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify({
//             // title: title,
//             // body: body,
//             // userId: userId,
//             title,
//             body,
//             userId,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         },
//     })
//     .then(res => {
//         console.log(res)
//         // return res.json()
//     })
//     .catch(err => console.log(err.message))
// }

// createPost("title","body",15)