


/*
const resultado = prompt('Bem vindo , com que falo')

console.log(resultado)

console.log(resultado.toUpperCase())
*/



/* Função anonima */

const sum = function(number1, number2){ 
    console.log(number1+number2)
}


const multi = function(number1, number2){
    return number1 + number2
}


/* function Scope */

let subject = 'Java'

function newSubject(subject){
    subject = 'JavaScript'
    return subject
}

console.log(newSubject())
console.log(subject)



/* function Hosting*/

Myage()
function Myage(){
    console.log('17')
}



// Arrow Function

const nameDog = (nameDog) =>{
    console.log(nameDog)
}

// Calback Function

function Programmer(programmer){
    console.log('Vou programar')
    programmer()


    console.log('Acabei de Programar')
}

Programmer(
   // console.log('Estou programando')
    () =>  {
        console.log('Estou programando')
    }
)


// Function Constructor

function Pessoa(name, walk){
    this.name = name
    this.walk = function (){
        return `${this.name} is walking`
    }
}

let aluno = new Pessoa('Henrique Mendes')
let aluno2 = new Pessoa('Jorje Ribeiro')
console.log(aluno2.walk())


let date = new Date()
console.log(date.getMinutes())

