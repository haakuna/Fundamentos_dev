

function heroesThatStartsWith( heroes: string[], letter: string ): string[] {

    let herosWithLetter: string[] = [];
    for ( let i = 0; i < heroes.length; i++ ) {
        let hero = heroes[i];
        if ( hero.startsWith(letter) ) {
            herosWithLetter.push(hero);
        }
    }
    return herosWithLetter;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );  
console.log( herosWithLetterS ); // She Hulk, Spiderman

