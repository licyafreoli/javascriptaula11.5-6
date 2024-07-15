const arr = ['abacaxi','bombom','ci','do']

const newArr2 = arr.map(elemento => elemento.toUpperCase())

const novoArr=arr.filter((palavra)=>palavra.length>5)


console.log(novoArr)
console.log(newArr2)
