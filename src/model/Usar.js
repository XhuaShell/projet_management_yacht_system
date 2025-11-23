export class Usar {
    #cod_servicio;
    #num_amarre;
    #fecha;
    #monto;

    constructor(usar = {}) {
        if (
            typeof usar.cod_servicio !== "number" ||
            typeof usar.num_amarre !== "number" ||
            typeof usar.monto !== "number"
        ) {
            throw new Error("Información no ingresada correctamente");
        }

        this.cod_servicio = usar.cod_servicio ?? null;
        this.num_amarre = usar.num_amarre ?? null;
        this.fecha = usar.fecha ?? null;
        this.monto = usar.monto ?? null;
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

    get num_amarre() {
        return this.#num_amarre;
    }
    set num_amarre(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El num_amarre debe ser un número");
        }
        this.#num_amarre = value;
    }

    get fecha() {
        return this.#fecha;
    }
    set fecha(value) {
        this.#fecha = value;
    }

    get monto() {
        return this.#monto;
    }
    set monto(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El monto debe ser número");
        }
        this.#monto = value;
    }

    toJSON() {
        return {
            cod_servicio: this.#cod_servicio,
            num_amarre: this.#num_amarre,
            fecha: this.#fecha,
            monto: this.#monto,
        };
    }
}
