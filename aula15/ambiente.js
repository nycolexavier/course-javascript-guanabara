let num = [5, 8, 2,9]

// colocar em ordem
console.log(num.sort())

// colocar o 1 na última posição
console.log(num.push(1))

console.log(`nosso vetor é o ${num}`)
//o num tem 
console.log(num.length)

// o primeiro valor é:
console.log(num[0])

console.log(num)
let pos = num.indexOf(4)
console.log(pos)

if ( pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor esá na posição ${pos}`)
}