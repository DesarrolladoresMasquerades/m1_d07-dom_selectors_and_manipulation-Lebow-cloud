
/* console.log("Js loaded")

 console.log(
    document.querySelector("div.first-div").innerText,
    "\n",
    document.querySelector("div.first-div + div").innerText 
) */

const firstDiv = Array.from(document. getElementsByClassName("first-div"))  // tRANSFORM INTO AND A PROPER ARRAY    

// console.log("firstDiv", firstDiv)

// firstDiv.forEach(console.log);

const divs = Array.from(document.querySelectorAll("div")) // IT WILL TAKE ALL THE DIVS TAGS
//console.log(divs)

const oneDiv = document.querySelector("div")
// console.log(oneDiv) IT WILL TAKE ONLY THE FIRST DIV

divs.forEach(console.log)

const secondDiv = document.getElementById("second-div")

console.log("secondDiv", secondDiv)

// -------- Test for Equality -------

const cards = Array.from(document.getElementsByClassName("card"))

console.log(
    divs[0] === cards[0]
)




console.log(cards)

// --------- selecting on a branch (element inside document) ---------

// document.getElementsByTagName("div")[0].querySelector("p")

console.log(divs[0].querySelectorAll("p"))
