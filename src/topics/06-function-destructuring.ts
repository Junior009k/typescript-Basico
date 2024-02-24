export interface Product{
    description: string;
    price: number;
}
interface taxCalculationOption{
    tax:number; 
    products:Product[];
}
/*
const phone: Product ={
    description: 'Nokia A1',
    price: 150.0
}
const tablet: Product ={
    description: 'iPad Air',
    price: 250.0
}
*/


function taxCalculation(options : taxCalculationOption): [number,number]{
    let total=0
    const{products,tax}= options
    console.log(products)
    products.forEach(({price}) => {
        total+=price;
    });
    return [total,total*tax]
}

//const shoppingCart= [phone, tablet]
//const tax = 0.15
//const [Total,taxCalculated] = taxCalculation({products:shoppingCart,tax})

//console.log('Total',Total)
//console.log('Tax', taxCalculated)

export{ taxCalculation}
