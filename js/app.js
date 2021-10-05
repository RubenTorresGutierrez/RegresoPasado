/*
    // Ángel Manuel Fernández
    // Sergio Matamoros
    // Rubén Torres
    // Fecha: 5-10-2021
    // Licencia: GNU Affero General Public License v3.0
*/

// Importaciones
import {Personaje} from './personaje.js';
import {Narrador} from './narrador.js';

class App{
    constructor(){
        window.onload = this.iniciar.bind(this);        
        //this.iniciar();
    }
    iniciar(){

        //Título
        let h1 = document.createElement('h1')
        document.body.appendChild(h1)
        h1.appendChild(document.createTextNode('REGRESO AL PASADO'));
        let h3 = document.createElement('h3')
        document.body.appendChild(h3)
        h3.appendChild(document.createTextNode('Cena de noche vieja'));

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


        //Btn elección bien.
        let btnBien = document.createElement('button');
        document.body.appendChild(btnBien);
        btnBien.appendChild(document.createTextNode('Bien'));

        //Btn elección mal
        let btnMal = document.createElement('button');
        document.body.appendChild(btnMal);
        btnMal.appendChild(document.createTextNode('Mal'));

        //Click's botones
        btnBien.onclick = function() {
            //Texto aqui
            let h1 = document.createElement('h1')
            document.body.appendChild(h1)
            h1.appendChild(document.createTextNode('REGRESO AL PASADO'));
            btnBien.disabled = true;
            btnMal.disabled = true;

        }

        btnMal.onclick = function() {
            //Texto aquí
            let h1 = document.createElement('h1')
            document.body.appendChild(h1)
            h1.appendChild(document.createTextNode('REGRESO AL PASADO'));
            btnBien.disabled = true;
            btnMal.disabled = true;
        }
    }
}

new App();