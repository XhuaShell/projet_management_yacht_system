export class Venta {
    #num_venta;
    #fecha;
    #monto;
    #num_amarre;
    #vendedor_cedula;
    #comprador_cedula;

    constructor(venta = {}) {
        if (
            typeof venta.monto !== "number" ||
            typeof venta.comprador_cedula !== "string"
        ) {
            throw new Error("Información no ingresada correctamente");
        }

        this.num_venta = venta.num_venta ?? null;
        this.fecha = venta.fecha ?? null;
        this.monto = venta.monto ?? null;
        this.num_amarre = venta.num_amarre ?? null;
        this.vendedor_cedula = venta.vendedor_cedula ?? null;
        this.comprador_cedula = venta.comprador_cedula ?? null;
    }

    get num_venta() {
        return this.#num_venta;
    }
    set num_venta(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El num_venta debe ser un número");
        }
        this.#num_venta = value;
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
            throw new Error("El monto debe ser un número");
        }
        this.#monto = value;
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

    get vendedor_cedula() {
        return this.#vendedor_cedula;
    }
    set vendedor_cedula(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La cédula del vendedor debe ser texto");
        }
        this.#vendedor_cedula = value;
    }

    get comprador_cedula() {
        return this.#comprador_cedula;
    }
    set comprador_cedula(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La cédula del comprador debe ser texto");
        }
        this.#comprador_cedula = value;
    }

    toJSON() {
        return {
            num_venta: this.#num_venta,
            fecha: this.#fecha,
            monto: this.#monto,
            num_amarre: this.#num_amarre,
            vendedor_cedula: this.#vendedor_cedula,
            comprador_cedula: this.#comprador_cedula,
        };
    }
}
