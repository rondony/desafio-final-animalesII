import Animales from "./Animales.js";

const audioPlayer = document.getElementById('player');

export class Leon extends Animales {
    constructor(nombre, rango, comentarios, img, sonido, tipo) {
        super(nombre, rango, comentarios, img, sonido, tipo);
    }

    ruidoRugido() {
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}

export class Lobo extends Animales {
    constructor(nombre, rango, comentarios, img, sonido, tipo) {
        super(nombre, rango, comentarios, img, sonido, tipo);
    }

    ruidoAullido() {
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}

export class Oso extends Animales {
    constructor(nombre, rango, comentarios, img, sonido, tipo) {
        super(nombre, rango, comentarios, img, sonido, tipo);
    }

    ruidoGrunido() {
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}

export class Serpiente extends Animales {
    constructor(nombre, rango, comentarios, img, sonido, tipo) {
        super(nombre, rango, comentarios, img, sonido, tipo);
    }

    ruidoSiseo() {
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}

export class Aguila extends Animales {
    constructor(nombre, rango, comentarios, img, sonido, tipo) {
        super(nombre, rango, comentarios, img, sonido, tipo);
    }

    ruidoChillido() {
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}