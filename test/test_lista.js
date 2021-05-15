/**
 * - En una lista vacía hay cero elementos.
 * - Cuando se agrega 1 elemento a una lista vacía hay un elemento.
 * - En una lista vacía no se encuentra ninguna clave.
 * - Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
 * 
 * - Cuando se agrega 1 elemento a una lista que ya tiene N elementos hay N+1 elementos.
 * - Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente a esa clave.
 * - Cuando se agrega 1 elemento a una lista con N elementos se puede recuperar el valor a partir de la clave.
 * 
 * - En una lista con N elementos se puede conocer el valor de N.
 * - En una lista con N elementos se puede recuperar una lista ordenada de las claves almacenadas en la lista.
 * 
 * - Cuando se agrega 1 elemento la clave puede contener solamente cadenas de texto. En esto se incluyen
 * las claves vacias.
 * 
 * - En una lista de N elementos se puede borrar 1 elemento indicado por su clave.
 * - En una lista de N elementos se intenta borrar 1 elemento sin indicar la clave.
  */

const assert = require("chai").assert;

const Lista = require("../src/lista.js")

describe("En una lista vacia", function () {
    var lista = new Lista();

    it("Hay cero elementos", function () {
        assert.equal(lista.count(), 0);
    })

    it("No se encuentra ninguna clave", function () {
        assert.isNaN(lista.find("clave"));
    })
})

describe("Cuando se agrega un elemento a una lista vacia", function () {
    var lista = new Lista();
    lista.add("clave", "valor");

    it("Agrego un elemento a la lista vacia", function () {
        assert.equal(lista.count(), 1);
    })

    it("Obtengo valor a partir de clave", function () {
        assert.equal(lista.find("clave"), "valor");
    })

    it("Pido un valor a partir de clave que no existe", function () {
        assert.isNaN(lista.find("claveInexistente"));
    })
})

describe("Cuando se agrega un elemento a una lista que ya tiene un elemento", function () {
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.add("claveDos", "valorDos");

    it("Agrego un elemento a la lista que tiene 1 elemento", function () {
        assert.equal(lista.count(), 2);
    })

    it("Agrego un elemento a la lista que ya tiene 1 elemento. Ahora, hay 2 elementos.", function () {
        assert.equal(lista.count(), 2);
    })

    it("Obtengo valor a partir de la clave", function () {
        assert.equal(lista.find("clave"), "valor");
    })

    it("Obtengo valor del 2do elemento a partir de la clave", function () {
        assert.equal(lista.find("claveDos"), "valorDos");
    })
})

describe("Cuando se agrega un elemento a una lista que ya tiene 4 elemento", function () {
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.add("claveDos", "valor2");
    lista.add("claveTres", "valor3");
    lista.add("claveCuatro", "valor4");

    lista.add("claveCinco", "valor5");

    it("Agrego un elemento a la lista que tiene 4 elementos", function () {
        assert.equal(lista.count(), 5);
    })

    it("Obtengo valor a partir de la clave", function () {
        assert.equal(lista.find("claveCinco"), "valor5");
    })

    it("Obtengo valor del 3er elemento a partir de la clave", function () {
        assert.equal(lista.find("claveTres"), "valor3");
    })
})

describe("Cuando se agrega un elemento con una clave existente se actualiza el valor", function () {
    var lista = new Lista();
    lista.add("clave", "valor");

    it("Agrego un valor a clave existente y se actualiza", function () {
        lista.add("clave", "valorActualizado");
        assert.equal(lista.find("clave"), "valorActualizado");
        assert.equal(lista.count(), 1);
    })
})

describe("Cuando se agrega un elemento a una lista vacia la clave debe contener solamente \
cadenas de texto", function () {
    var lista = new Lista();

    it("Agrego un elemento con clave que cumple condicion", function () {
        lista.add("clave", "valor");
        assert.equal(lista.count(), 1);
    })

    it("Agrego un elemento con clave que NO cumple condicion", function () {
        lista.add("clave2", "valor");
        assert.equal(lista.count(), 1);
    })

    it("Agrego un elemento con clave vacia", function () {
        lista.add("", "valor");
        assert.equal(lista.count(), 1);
    })
})

describe("Cuando se agrega un elemento a una lista con elementos la clave debe \
 contener solamente cadenas de texto", function () {
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.add("claveDos", "valor2");

    it("Agrego un elemento con clave que cumple condicion", function () {
        lista.add("claveTest", "valor1234");
        assert.equal(lista.count(), 3);
    })

    it("Agrego un elemento con clave que NO cumple condicion", function () {
        lista.add("clave$!@#$%*()", "1234");
        assert.equal(lista.count(), 3);
    })
})

describe("Agrego un elemento con clave vacia a una lista con 0 elementos", function () {
    var lista = new Lista();
    lista.add("", "valor");

    it("Agrego un elemento con clave vacia", function () {
        assert.equal(lista.count(), 0);
    })
})

describe("Obtengo lista de claves ordenada alfateticamente cuando las claves no estan ordenadas", function () {
    var lista = new Lista();
    lista.add("claveZ", "valor");
    lista.add("claveF", "valor");
    lista.add("claveA", "loquesea");

    it("Obtengo lista de claves ordenada alfabeticamente", function () {
        assert.sameOrderedMembers (lista.claves(), ["claveA","claveF","claveZ"]);
    })
})

describe("Obtengo lista de claves ordenada alfateticamente cuando las claves ya estan ordenadas", function () {
    var lista = new Lista();
    lista.add("claveA", "valor");
    lista.add("claveF", "valor");
    lista.add("claveZ", "loquesea");

    it("Obtengo lista de claves ordenada alfabeticamente", function () {
        assert.sameOrderedMembers (lista.claves(), ["claveA","claveF","claveZ"]);
    })
})

describe("Elimino un elementos por su clave en una lista con 1 elemento", function () {
    var lista = new Lista();
    lista.add("claveA", "valor");

    it("Elimino un elemento por su clave", function () {
        lista.delete("claveA");
        assert.equal(lista.count(), 0);
    })
})

describe("Elimino un elementos por su clave en una lista con 2 elementos", function () {
    var lista = new Lista();
    lista.add("claveA", "valor");
    lista.add("claveB", "valorB");

    it("Elimino un elemento por su clave", function () {
        lista.delete("claveA");
        assert.equal(lista.count(), 1);
        assert.equal(lista.find("claveB"), "valorB");
    })
})

describe("Elimino un elementos por su clave en una lista con 0 elemento", function () {
    var lista = new Lista();

    it("Intento eliminar un elemento por su clave", function () {
        assert.isNaN(lista.delete("claveA"));
    })
})