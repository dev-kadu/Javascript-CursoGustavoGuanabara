let num = [5, 8, 2, 4]
num.push(7)

console.log(`valores: ${num}  Tamanho: ${num.length} ordenado ${num.sort()}`)

for(let i=0; i<num.length; i++) {
    console.log(`posição: ${i} valor : ${num[i]}`)
}

for(let i in num){
    console.log(`posição: ${i} valor : ${num[i]}`)
}