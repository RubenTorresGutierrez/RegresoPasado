// Ángel Manuel Fernández
// Sergio Matamoros
// Rubén Torres

export class Personaje{
    constructor(nombre){
        this.nombre = nombre;
    }
    hablar(texto){
        document.write(`<p>- ${this.nombre}: ${texto}</p>`);
    }
}