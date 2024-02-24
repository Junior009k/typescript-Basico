function addNumber(a:number,b:number){
    return a + b;

}

const addNumbersArrow = (a:number, b:number):string =>{
    return `${a+b}`
}

function multiply(firstNumber:number, secondNumber:number, base:number =2){

    return firstNumber*base
}


//const result = addNumber(1,2)
//const result2 = addNumbersArrow(1,2)
//const multiplyResult = multiply(1,2)
//console.log({result,result2,multiplyResult})


interface Character{
    name:string;
    hp:number;
    showHp: ()=> void;
}
const healCharacter = (character:Character, amount:number) =>{

    character.hp+=amount;
}

const strider:Character = {
    name: 'Strider', 
    hp:50, 
    showHp(){
        console.log(`Puntos de vidas ${this.hp}`)
    }
}

strider.showHp()
healCharacter(strider, 1100)
strider.showHp()
export{};