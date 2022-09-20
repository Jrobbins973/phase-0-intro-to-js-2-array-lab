// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const newCats = [
        ...cats.slice(0, 3),
        name,
        ...cats.slice(3),
    ]
    return newCats
    }

// console.log(appendCat('Marvin'))


function prependCat(name){
    const newCats = [
        ...cats.slice(0, 0),
        name,
        ...cats.slice(0),
    ]
    return newCats
    }

// function removeLastCat(){
//     const newCats =[
//     ...cats.slice(0, 3) 
//     ]
//     return newCats
    
// }


function removeLastCat(name){
    const newCats = [...cats];
    newCats.pop(name)
    return newCats
 
 }

 function removeFirstCat(name){
    const newCats = [...cats];
    newCats.shift(name)
    return newCats
 
 }
