import { Aguila, Leon, Lobo, Oso, Serpiente } from "./clases/Tipos.js";
import data from "./data.js";

let Animales = [];
let imagenSrc;
let sonidoOrg;
let tipo;

const cardCreate = () => {
    try {
        const template = document.getElementById("Animales");
        template.innerHTML = ``;
        Animales.forEach((key, animales) => {
            template.innerHTML += `
            <div class="px-3 pb-2">
            <div class="bg-dark text-white">
              <img
                height="200"
                src="./assets/imgs/${key.img}"
                data-bs-toggle="modal"  
                data-bs-target="#exampleModal" 
                onclick="modalDetails('${animales}')" 
              />
              <div>
                <button onclick="playSound('${key.sonido}')" class="btn btn-secondary w-100"> <img height="30" src="./assets/imgs/audio.svg" /> </button>
              </div>
            </div>
          </div>
            `
        })
    } catch (error) {
        console.log(error);
    }
}

window.playSound = (sonido) => {
    try {
        const animal = Animales.find((item) => {
            return item.sonido === sonido;
        })
        console.log(animal)
        sonido == 'Chillido.mp3' ? animal.ruidoChillido()
            : sonido == 'Rugido.mp3' ? animal.ruidoRugido()
                : sonido == 'Aullido.mp3' ? animal.ruidoAullido()
                    : sonido == 'Grunido.mp3' ? animal.ruidoGrunido()
                        : sonido == 'Siseo.mp3' ? animal.ruidoSiseo()
                            : undefined;

    } catch (error) {
        console.log(error);
    }
}
window.modalDetails = (animales) => {
    try {
        const modalBody = document.getElementsByClassName('modal-body')[0];
        const animal = Animales[animales];
        console.log(modalBody)
        console.log(animal)
        modalBody.innerHTML = `
        <div class="px-3 pb-2">
        <div class="card w-50 m-auto bg-dark text-white border-0">
          <img
            src="./assets/imgs/${animal.img}"
            class="d-block m-auto w-100"
          />
          <div class="card-body text-center">
            <h6 class="card-text ">${animal.rango}</h6>
            <h6 class="card-text ">${animal.tipo}</h6>
            <h6 class="card-text m-0">Comentarios</h6>
            <hr/>
            <p>${animal.comentarios}</p>
          </div>
        </div>
        </div>
        `
    } catch (error) {
        console.log(error)
    }
};

document.getElementById('animal').addEventListener('change', async (e) => {
    try {
        const animalesSelected = e.target.value;
        const animales = await data.getData()
        const animalesObject = await animales.find((animal) => {
            return animal.name === animalesSelected;
        })
        imagenSrc = `${animalesObject.imagen}`;
        sonidoOrg = `${animalesObject.sonido}`;
        tipo = `${animalesObject.tipo}`;
        const preview = document.getElementById('preview');
        preview.parentElement.classList.remove('p-5');
        preview.style.backgroundImage = `url(./assets/imgs/${imagenSrc})`;
    } catch (error) {
        console.log(error);
    }
});

document.getElementById('btnRegistrar').addEventListener('click', () => {
    try {
        const nombre = document.getElementById('animal').value;
        const rango = document.getElementById('edad').value;
        const Comentarios = document.getElementById('Comentarios').value;
        if (nombre && rango && Comentarios) {
            let animal = nombre == 'Aguila' ? new Aguila(nombre, rango, Comentarios, imagenSrc, sonidoOrg, tipo)
                : nombre == 'Leon' ? new Leon(nombre, rango, Comentarios, imagenSrc, sonidoOrg, tipo)
                    : nombre == 'Lobo' ? new Lobo(nombre, rango, Comentarios, imagenSrc, sonidoOrg, tipo)
                        : nombre == 'Oso' ? new Oso(nombre, rango, Comentarios, imagenSrc, sonidoOrg, tipo)
                            : nombre == 'Serpiente' ? new Serpiente(nombre, rango, Comentarios, imagenSrc, sonidoOrg, tipo)
                                : undefined

            Animales.push(animal);
            cardCreate();
        } else {
            alert('Faltan Datos')
        }
    } catch (error) {
        console.log(error)
    }
});