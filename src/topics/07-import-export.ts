import {Product,taxCalculation} from './06-function-destructuring'


const shoppingCart: Product[] = [{

    description:'Nokia', 
    price:250
},{

    description:'iPad', 
    price:150
}]


const tax = 0.15
const [Total,taxCalculated] = taxCalculation({products:shoppingCart,tax})

console.log('Total',Total)
console.log('Tax', taxCalculated)