

//let e const são locais e só funcionam onde foram declaradas

let x = 1

{
    x = 2
    console.log(x)
}

console.log(x)


const y = 11

{
    
    console.log(y)
}

const nameProfessor = ['Joana', 'Paulo', 'Joromel', 'Rodrigues']
//nameProfessor = { Professor : 'João '} // false 
nameProfessor.push('Miguel') // True
console.log(nameProfessor)