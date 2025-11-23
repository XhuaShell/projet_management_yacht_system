export class Servicio {
    #cod_servicio;
    #nombre;
    #descripcion;
    #costo;

    constructor(servicio = {}) {
        if (
            typeof servicio.nombre !== "string" ||
            typeof servicio.descripcion !== "string" ||
            typeof servicio.costo !== "number"
        ) {
            throw new Error("Información no ingresada correctamente");
        }

        this.cod_servicio = servicio.cod_servicio ?? null;
        this.nombre = servicio.nombre ?? null;
        this.descripcion = servicio.descripcion ?? null;
        this.costo = servicio.costo ?? null;
    }

    get cod_servicio() {
        return this.#cod_servicio;
    }
    set cod_servicio(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El cod_servicio debe ser un número");
        }
        this.#cod_servicio = value;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("El nombre debe ser texto");
        }
        this.#nombre = value;
    }

    get descripcion() {
        return this.#descripcion;
    }
    set descripcion(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La descripción debe ser texto");
        }
        this.#descripcion = value;
    }

    get costo() {
        return this.#costo;
    }
    set costo(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El costo debe ser numérico");
        }
        this.#costo = value;
    }

    toJSON() {
        return {
            cod_servicio: this.#cod_servicio,
            nombre: this.#nombre,
            descripcion: this.#descripcion,
            costo: this.#costo,
        };
    }
}
