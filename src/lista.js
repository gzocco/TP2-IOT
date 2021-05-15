module.exports = class Lista {
    #elementos;

    constructor() {
        this.#elementos = [];
    }
    // Devuelve cantidad de elementos de la lista.
    count() {
        return this.#elementos.length;
    }

    // Devuelve el valor de un elemento identificado por su clave.
    find(clave) {
        // Verifico que la lista contenga al menos 1 elemento.
        if (this.#elementos.length >= 1) {
            // Buscar la clave en el array y devolver el valor.
            for (var i = 0; i < this.#elementos.length; i++) {
                if (this.#elementos[i].clave == clave)
                    return this.#elementos[i].valor;
            }
        }
        return NaN;
    }
    // Inserta un elemento a la lista.
    add(clave, valor) {
        // Verifico que la clave sea una cadena de texto.
        if (/^[a-zA-Z]+$/.test(clave)) {
            // Busco si la clave ya existe.
            if (this.#elementos.length >= 1) {
                for (var i = 0; i < this.#elementos.length; i++) {
                    if (this.#elementos[i].clave == clave)
                        this.#elementos[i].valor = valor;
                    else {
                        this.#elementos.push({ clave, valor });
                        break;
                    }
                }
            }
            else
                // Agrego un elemento a la lista.
                this.#elementos.push({ clave, valor });
        }
    }

    // Devuelve lista de claves ordenadas alfabéticamente.
    claves() {
        if (this.#elementos.length >= 1) {
            var clavesArray = [];
            for (var i = 0; i < this.#elementos.length; i++) {
                clavesArray.push(this.#elementos[i].clave)
            }
            return (clavesArray.sort());
        }
    }

    //Elimina un elemento identificado por su clave.
    delete(clave) {
        // Verifico que la lista contenga al menos 1 elemento.
        if (this.#elementos.length >= 1) {
            // Buscar la clave en el array y borrar.
            for (var i = 0; i < this.#elementos.length; i++) {
                if (this.#elementos[i].clave == clave)
                    this.#elementos.splice(i, 1);
            }
        }
        return NaN;
    }
}