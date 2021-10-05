// Ángel Manuel Fernández
// Sergio Matamoros
// Rubén Torres

// Importaciones
import {Personas} from './personas.js';
import {Objetos} from './objetos.js';
import {Narrador} from './narrador.js';

class App{
    constructor(){

        window.onload = this.iniciar.bind(this);        

        //Objetos
        this.narrador = new Narrador();
        this.personajes = [];
        this.personajes[0] = new Personas('Juan');
        this.personajes[1] = new Personas('María');
        this.personajes[2] = new Personas(`Padre de ${this.personajes[0].nombre}`);
        this.personajes[3] = new Personas(`Madre de ${this.personajes[0].nombre}`);
        this.personajes[4] = new Personas(`Tío de ${this.personajes[0].nombre}`);
        this.television = new Objetos('Televisión');

    }
    iniciar(){

        //Diálogo
        this.narrador.hablar(`Era un 31 de diciembre del año 2021
        cuando la familia de ${this.personajes[0].nombre}, se disponia a darle 
        entrada al año nuevo.`);
        this.personajes[3].hablar(`${this.personajes[0].nombre}!!!! Correee trae las
         uvas, que van a empezar ya las campanadaaaass!!!!`);
        this.personajes[0].hablar(`Que siiiii!!! Que estoy con ${this.personajes[1].nombre}
         quitándole las pipas, que no nos gustan.`);
        this.personajes[4].hablar(`Corre ${this.personajes[0].nombre}!! Que no vayáis a empezar
        mal el año.`);
        this.narrador.hablar(`Y una vez todos en la mesa, ${this.personajes[0].nombre} 
        y toda su família, empezaban cantar las campanadas.`);
        for(let i=1;i<=12;i++){
            let aleatorio = Math.floor(Math.random()*this.personajes.length);
            this.personajes[aleatorio].hablar(i);
        }
        this.personajes[3].hablar('FELIZ 2020!!!!!!');
        this.personajes[0].hablar('FELIZ 2022!!!!!!');
        this.personajes[0].hablar('¿¿¿¿¿2020?????');
        this.personajes[3].hablar('¿¿¿¿¿2022?????');
        this.personajes[3].hablar('Este muchacho ya no sabe ni dónde vive jajajajaja.');
        this.personajes[4].hablar('Jajajajaj, chavaaaal espavilaaaa.');
        this.personajes[0].hablar(`Pero si acabamos de terminar 2021, quiere decir,
        que empezamos 2022`);
        this.personajes[2].hablar('No hijo, no.');
        this.narrador.hablar(`${this.personajes[0].nombre} sabía que su família estaba
        bromeando, porque él estaba muy seguro de que empezaban el año
        2022, lo que no entendía, era por qué insistían tanto con la broma.`);


        this.narrador.hablar(`Un día, ${this.personajes[0].nombre}, viendo 
        la televisión, encontró una noticia que le resultó peculiar.`);
        this.television.hablar(`Últimas noticias en el caso Brexit: 
        Reino Unido, sigue negociando con Europa por el Brexit.`);
        this.narrador.hablar(`${this.personajes[0]}, sorprendido, empieza a creer que realmente
        están en 2020, porque él sabe que Reino Unido se separó de Europa, y se lo tomó...`);

        if(Math.floor(Math.random()*2)+1){
            this.narrador.hablar(`${this.personajes[0]}, se lo tomó bien, 
            y le entraron ganas de salvar el mundo, porque él sabía ya todo  
            lo que iba a pasar, y quería evitar el covid-19 a toda costa,
            así que lo que hizo fué, avisar, empezar a hablar con administraciones 
            públicas, hospitales, laboratorios, para empezar a desarrollar ya la vacuna 
            del futuro virus que iba a crear la pandemia que todos vivímos, pero 
            eso provocó que se expusiera demasiado al virus, he hizo que se acabase contagiando
             y finalmente muriendo.`);
        }else{
            this.narrador.hablar(`${this.personajes[0]}, se lo tomó mal,
            se encerró en su casa, en su habitación, no salía, no hablaba con nadie
            tenía miedo, estaba asustado, ${this.personajes[1]}, su novia intentó hablar
             con él en diferentes ocasiones, hasta que se cansó y le dejó. Cada vez se frustaba más 
             tenía mal aspecto, no le quería nadie, entró en depresión y acabó suicidandose.`);
        }

        this.narrador.hablar(`${this.personajes[0]}, realmente debió morir en el año 2020, era su 
        destino, era lo que estaba elegido, pero a pesar de todas las desgracias de aquel año 
        se salvó, y la muerte... No se equivoca 2 veces.`);
    }
}

new App();