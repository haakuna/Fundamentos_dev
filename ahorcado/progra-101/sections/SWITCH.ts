export let weekDay: number = 1;

if ( weekDay <= 0 ) {
    // console.log("Dia de la semana no permitido");

    throw new Error("El valor de la variable weekDay no es válido");
}

switch( weekDay ){

    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    default:
        console.log("No es un día válido");
        break;
}