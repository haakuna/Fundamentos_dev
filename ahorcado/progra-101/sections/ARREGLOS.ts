

export let personas: string[] = ['arturo', 'kevin', 'medina'];
export let salarios: number[] = [2000,2500,4000]
export let flores: string[] = ['1','2','3','4','5'];

// if (personas [3] === undefined){
//    console.log(personas[4]);
// }


for ( let i = 0; i < personas.length ; i++ ){
  console.log(personas[i] + ' tiene un salario de: ' + salarios[i]);
}

//arrturo tiene un salario de 1500
//kevin tiene un salario de 1400
//medina tiene un salario de 4000
