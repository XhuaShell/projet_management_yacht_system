export class TipoYate {
    #id_tipo;
    #nombre;
    #descripcion;

    constructor(tipo = {}) {
        if (
            typeof tipo.nombre !== "string"
        ) {
            throw new Error("Información no ingresada correctamente");
        }

        this.id_tipo = tipo.id_tipo ?? null;
        this.nombre = tipo.nombre ?? null;
        this.descripcion = tipo.descripcion ?? null;
    }

    get id_tipo() {
        return this.#id_tipo;
    }
    set id_tipo(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El id_tipo debe ser un número");
        }
        this.#id_tipo = value;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(value) {
        this.#nombre = value;
    }

    get descripcion() {
        return this.#descripcion;
    }
    set descripcion(value) {
        this.#descripcion = value;
    }

    toJSON() {
        return {
            id_tipo: this.#id_tipo,
            nombre: this.#nombre,
            descripcion: this.#descripcion,
        };
    }
}
