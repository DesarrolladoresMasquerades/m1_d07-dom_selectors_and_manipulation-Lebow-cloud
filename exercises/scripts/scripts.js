// 1: Get the node with the  main title

console.log(document.querySelector("h1"))


// => <h1>Fruits and veggies</h1>


// 2: Get the main title text
const fruitsAndVeggies = document.querySelector("h1").innerText
console.log(fruitsAndVeggies)

// => Fruits and veggies


// 3: Get all the collection with the fruit items

console.log(document.getElementsByClassName("fruit-item"))


// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]


// 4: Get all the veggie items - the text


document.querySelectorAll(".veggie-item").forEach(element => {
    console.log(element.innerText)
});

// Broccoli Celery Potato Spinach

// 5: Get the subtitle in the veggies section

console.log(document.querySelector(".list-veggies h2").innerText)

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

const fruitTitle = document.querySelector(".list-fruits h2")

fruitTitle.id = "fruit-title"

// => fruit-title

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

const bestFruitClass = (Array.from(document.getElementsByClassName("fruit-item")))

bestFruitClass[0].classList.add("best-fruit")
bestFruitClass[2].classList.add("best-fruit")



// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

const removeVeggieClass = document.querySelector(".veggies")
// const removeVeggieClass2 = document.getElementsByClassName("veggies")

removeVeggieClass.classList.remove("veggies")
console.log(removeVeggieClass)
// console.log(removeVeggieClass2)

// => <ul>...</ul>
// -------------------------------------------
// 9: Add a class 'veggie-love' to all the veggies

    
const addClassVeggieLove = Array.from(document.querySelectorAll(".list-veggies ul li"))

addClassVeggieLove.forEach((element)=>{
    return element.classList.add("veggie-love")
})

console.log(addClassVeggieLove)


// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

const removeViggieItemSpinach = Array.from(document.querySelectorAll(".list-veggies ul li"))

removeViggieItemSpinach.forEach((element)=>{
    if(element.innerText === "Spinach") return element.classList.remove("veggie-item")
})

console.log(removeViggieItemSpinach)
// => ... <li class="veggie-love">Spinach</li>