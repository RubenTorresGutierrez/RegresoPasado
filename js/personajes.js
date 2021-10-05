// Ángel Manuel Fernández
// Sergio Matamoros
// Rubén Torres

export class Personajes{
    constructor(nombre){
        this.nombre = nombre;
    }
    hablar(texto){

        //Creo el parrafo p
        let p = document.createElement("p");
        //Lo añado al body
        document.body.appendChild(p);
       
        //Creo el span
        let span = document.createElement("span");
        //Añado el span al parrafo
        p.appendChild(span);
        span.appendChild(document.createTextNode(`- ${this.nombre}: `));
        span.classList.add('personajeNombre');
        p.appendChild(document.createTextNode(texto));

        //document.body.innerHTML += `<p><span class="personajeNombre">- ${this.nombre}</span>: ${texto}</p>`;

        //document.write(`<p><span class="personajeNombre">- ${this.nombre}</span>: ${texto}</p>`);
    }
}