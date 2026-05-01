export
interface Person {
    name: string;
    age: number;
    isActive : boolean;
}

let kevin: Person = {
    name: 'kevin',
    age: 33,
    isActive : true
};

let melissa: Person  = {
    name: 'melissa',
    age: 20,
    isActive : true
};

let edgar: Person  = {
    name: 'edgar',
    age: 40,
    isActive : true
};

let personas: Person[] = [kevin, melissa, edgar];

for ( let i = 0; i < personas.length; i++ ){
    let people = personas[i];
    console.log(people.name + ' ' + people.age);
}

