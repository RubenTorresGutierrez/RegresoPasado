// Ángel Manuel Fernández
// Sergio Matamoros
// Rubén Torres

// Importaciones
import {Personaje} from './personaje.js';
import {Narrador} from './narrador.js';

class App{
    constructor(){

        window.onload = this.iniciar.bind(this);        

        

    }
    iniciar(){

        //Objetos
        this.narrador = new Narrador();
        this.protagonista = new Personaje('Juan');
        this.secundario = new Personaje('María');
        this.personaje1 = new Personaje(`Padre de ${this.protagonista.nombre}`);
        this.personaje2 = new Personaje(`Madre de ${this.protagonista.nombre}`);
        this.personaje3 = new Personaje(`Tío de ${this.protagonista.nombre}`);
        this.personaje4 = new Personaje(`Tía de ${this.protagonista.nombre}`);
        this.personaje5 = new Personaje(`Prima de ${this.protagonista.nombre}`);

        //Diálogo
        this.narrador.hablar(`Era un 31 de diciembre del año 2021
        cuando la familia de ${this.protagonista.nombre}, se disponia a darle 
        entrada al año nuevo.`);
        this.per

    }
}

new App();