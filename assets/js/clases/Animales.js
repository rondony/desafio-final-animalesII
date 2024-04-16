export default class Animales {

    constructor(nombre, rango, comentarios, img, sonido, tipo) {
        this._nombre = nombre;
        this._rango = rango;
        this._comentarios = comentarios;
        this._img = img;
        this._sonido = sonido;
        this._tipo = tipo;
    }

    get nombre() {
        return this._nombre;
    }

    get rango() {
        return this._rango;
    }

    get comentario() {
        return this._comentarios;
    }

    get img() {
        return this._img;
    }

    get sonido() {
        return this._sonido;
    }

    get tipo() {
        return this._tipo;
    }
}