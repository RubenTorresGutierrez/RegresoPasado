// Ángel Manuel Fernández
// Sergio Matamoros
// Rubén Torres

// Importaciones
import {Personaje} from './personaje.js';

class App{
    constructor(){
        window.onload = this.iniciar.bind(this);
    }
    iniciar(){
        let narrador = new Personaje('Narrador');
        let juan = new Personaje('Juan');
    }
}