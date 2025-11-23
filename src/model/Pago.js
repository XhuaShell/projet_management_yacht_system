export class Pago {
    #id_pago;
    #usuario_cedula;
    #fecha_realizacion;
    #monto;
    #descripcion;

    constructor(pago = {}) {
        if (
            typeof pago.usuario_cedula !== "string" ||
            typeof pago.descripcion !== "string" ||
            typeof pago.monto !== "number"
        ) {
            throw new Error("Información no ingresada correctamente");
        }

        this.id_pago = pago.id_pago ?? null;
        this.usuario_cedula = pago.usuario_cedula ?? null;
        this.fecha_realizacion = pago.fecha_realizacion ?? null;
        this.monto = pago.monto ?? null;
        this.descripcion = pago.descripcion ?? null;
    }

    get id_pago() {
        return this.#id_pago;
    }
    set id_pago(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El id_pago debe ser un número");
        }
        this.#id_pago = value;
    }

    get usuario_cedula() {
        return this.#usuario_cedula;
    }
    set usuario_cedula(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La cédula debe ser una cadena de texto");
        }
        this.#usuario_cedula = value;
    }

    get fecha_realizacion() {
        return this.#fecha_realizacion;
    }
    set fecha_realizacion(value) {
        this.#fecha_realizacion = value;
    }

    get monto() {
        return this.#monto;
    }
    set monto(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El monto debe ser un número");
        }
        this.#monto = value;
    }

    get descripcion() {
        return this.#descripcion;
    }
    set descripcion(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La descripción debe ser una cadena de texto");
        }
        this.#descripcion = value;
    }

    toJSON() {
        return {
            id_pago: this.#id_pago,
            usuario_cedula: this.#usuario_cedula,
            fecha_realizacion: this.#fecha_realizacion,
            monto: this.#monto,
            descripcion: this.#descripcion,
        };
    }
}
