export function whatsMyType<T>(argument:T):T{
    return argument
}


const amIString = whatsMyType<string>('Hola Mundo')
const amINumber = whatsMyType<number>(34)
const amIArray = whatsMyType<number[]>([1,2,3])

console.log(typeof(amIString))
console.log(typeof(amINumber))
console.log(typeof(amIArray))