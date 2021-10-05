// Ángel Manuel Fernández
// Sergio Matamoros
// Rubén Torres

export class Narrador {
    hablar(texto){
        let p = document.createElement("p");
        document.body.appendChild(p);
        p.appendChild(document.createTextNode(texto));
        p.classList.add('narrador');
        //p.id = 
        //document.write(`<p class="narrador">- ${texto}</p>`);
    }
}