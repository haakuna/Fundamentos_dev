
export let person = {
    name : 'arturo',
    age: 33,
    isActive: true,
    hobbies: ['futbol','gamer'],
    toString(){
      let objectString = this.name + ' ' + this.age;
      console.log (objectString);
    }
}

// person.toString();

let car = {
    marca : 'toyota',
    age : 2000,
    tipoCarro : 'automatico'

}

let smartTV = {
    marca : 'samsung',
    age : 2001,
    canals : 20 

}

let ytVideo = {
    canal : 'hakuna',
    fechaCreacion : '30/12/1992',
    videos : ['el mejor canal', 'tutoriales de programacion'],
    likes : 10200

}

console.log (car);
console.log (smartTV);
console.log (ytVideo);