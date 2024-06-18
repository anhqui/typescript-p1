//-------------------
// TypeScript 101
//-------------------

let myname = 'qui'

// myname = 6

//------------------------
// Benefits of TypeScript
//------------------------

// 1- better error feedback

function reverse(str: string){
    return str.split(' ').reverse().join('')
}

const result = reverse('hello')

// 2- better autocomplete & code hints

const reversed = reverse('qui')

// 3- custom types

interface MenuItem{
    title: string
    cost: number
}

function printMenuItem(item: MenuItem){
    console.log(item.title, ':', item.cost);
    
}

// error example 1
// printMenuItem()

// error example 2
// printMenuItem({title: 'pizza', cost: '15'})

// error example 3
// printMenuItem({name: 'hamburger', cost: 5})

// correct example
printMenuItem({title: 'cheese pizza', cost: 10})


// 4- self documenting
// printMenuItem()


// Just like JS, with extra type annotations
let firstname: string = 'qui'
function add(x: number, y:number): number{
    return x + y
}