// Ejercicio 1
// Escribe una función llamada numPasos que reciba un número (entero positivo) y que retorne el número de pasos necesario 
// para reducirlo a cero siguiendo estas instrucciones:

// Si el número es par, dividirlo por 2, de lo contrario, restarle 1.


const numPasos = num => {
  let cont = 0

  while(num !== 0){

    if(num %2 === 0){
      num = num / 2
      cont++
    }
    else{
      num = num - 1
      cont++
    }
  }
  return cont
}

console.log(numPasos(8))

// Ejercicio 2
// Escribe una función llamada contraseña que reciba un string y retorne un nuevo string realizando los siguientes cambios:

const contrasenaFunction = str => {
  str = str.toLowerCase().replaceAll(' ', '').split('')

  const funct = str.map(item => {
    if(item === 'a'){
      item = '4'
    } 
    if(item === 'e'){
      item = '3'
    }     
    if(item === 'i'){
      item = '1'
    } 
    if(item === 'o'){
      item = '0'
    } 
    return item
  })

  return funct.join('')
}

console.log(contrasenaFunction("Esta es uNa prueba"))

// Ejercicio 3
// Escribe una función llamada likes que reciba un número y devuelva un string utilizando el formato de K para miles y M para millones.


const likes = num => {
  let resolve = 0

  if(num / 1000000 >= 1){
    resolve = Math.trunc(num / 1000000)
    str = resolve.toString().concat('M')
    return str
  }
  if(num / 1000 >= 1){
    resolve = Math.trunc(num / 1000)
    str = resolve.toString().concat('K')
    return str
  }
  return num.toString()
  
}

console.log(likes(983))


// Ejercicio 4
// Escribir una función llamada generarCodigo que reciba un string y retorne un nuevo string con las dos primeras letras de cada palabra.

const generarCodigo = str => {

  str = str.split(' ')
  const arrayStr = []

  for(let i = 0; i < str.length; i++){
    for(let j = 0; j< str[i].length; j++){
      if(j <= 1){
        arrayStr.push(str[i][j])
      }
    }
  }

  return arrayStr.join('')
}

console.log(generarCodigo("juan david berbeo"))