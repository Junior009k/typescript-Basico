export class Person {
    //public name : string; 
    //public address: string; 

    constructor(
        public firstName:string,
        public LastName:string,
        private address:string){
    }

}
/*
export class Hero extends Person{
    constructor(
        public alteEgo:string,
        public age:Number,
        public realName:string 
        ){
        super(realName,'New York')

    }
}
*/
export class Hero {
    //public person:Person
    constructor(
        public alteEgo:string,
        public age:Number,
        public realName:string,
        public person:Person
        ){
            //this.person=new Person(realName)

    }
}

const tony= new Person("Tony","Stark",'New York')
const iroman= new Hero("iron man",45, "Tony",tony);

console.log(iroman)