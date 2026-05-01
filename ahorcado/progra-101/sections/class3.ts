
export
class Car {
    readonly marca: string;
    puertas: number;
    tanque: number;
    isActive: boolean;
    tipo: string;
    fechaCreacion: number;

    constructor( marca: string, tipo: string ){
        this.marca = marca;
        this.puertas = 0;
        this.tanque = 100;
        this.isActive = false;
        this.tipo = tipo;
        this.fechaCreacion = 123456789;
    }

    turnOn(){
        if (this.isActive){
            console.log ('el carro se malogro F');
            return;
        }

        if (this.tanque <= 0){
            console.log ('El tanque esta vacio');
            return;

        }
        this.isActive = true;
        console.log('El carro se encendio');
    }

}

let miCarro = new Car('lambo', 'deportivo');

console.log(miCarro);
miCarro.turnOn();
console.log(miCarro);