export class Amarre {
    #num_amarre;
    #id_zona;
    #usuario_propietario_cedula;
    #fecha_compra;

    constructor(amarre = {}) {

        // Validaciones iniciales similares al estilo del Usuario
        if (
            typeof amarre.num_amarre !== "number" ||
            typeof amarre.id_zona !== "string"
        ) {
            throw new Error("Información no ingresada correctamente");
        }

        this.num_amarre = amarre.num_amarre ?? null;
        this.id_zona = amarre.id_zona ?? null;
        this.usuario_propietario_cedula = amarre.usuario_propietario_cedula ?? null;
        this.fecha_compra = amarre.fecha_compra ?? null;
    }

    // num_amarre
    get num_amarre() {
        return this.#num_amarre;
    }
    set num_amarre(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El número de amarre debe ser un número");
        }
        this.#num_amarre = value;
    }

    // id_zona
    get id_zona() {
        return this.#id_zona;
    }
    set id_zona(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La zona debe ser una cadena");
        }
        if (value && value.length !== 1) {
            throw new Error("La zona debe ser un caracter (A, B, C...)");
        }
        this.#id_zona = value;
    }

    // usuario_propietario_cedula
    get usuario_propietario_cedula() {
        return this.#usuario_propietario_cedula;
    }
    set usuario_propietario_cedula(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La cédula del propietario debe ser una cadena de texto");
        }
        this.#usuario_propietario_cedula = value;
    }

    // fecha_compra
    get fecha_compra() {
        return this.#fecha_compra;
    }
    set fecha_compra(value) {
        // No valido formato de fecha porque tu plantilla no valida fechas tampoco
        this.#fecha_compra = value;
    }

    // Serialización
    toJSON() {
        return {
            num_amarre: this.#num_amarre,
            id_zona: this.#id_zona,
            usuario_propietario_cedula: this.#usuario_propietario_cedula,
            fecha_compra: this.#fecha_compra,
        };
    }
}
