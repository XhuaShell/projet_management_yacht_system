export class Yate {
    #matricula;
    #nombre;
    #eslora;
    #manga;
    #calado;
    #usuario_dueno_cedula;
    #id_tipo;

    constructor(yate = {}) {
        this.matricula = yate.matricula ?? null;
        this.nombre = yate.nombre ?? null;
        this.eslora = yate.eslora ?? null;
        this.manga = yate.manga ?? null;
        this.calado = yate.calado ?? null;
        this.usuario_dueno_cedula = yate.usuario_dueno_cedula ?? null;
        this.id_tipo = yate.id_tipo ?? null;
        this.empleado_cargo = yate.empleado_cargo ?? null;
    }

    // --- matricula ---
    get matricula() {
        return this.#matricula;
    }
    set matricula(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La matrícula debe ser una cadena de texto");
        }
        this.#matricula = value;
    }

    // --- nombre ---
    get nombre() {
        return this.#nombre;
    }
    set nombre(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("El nombre debe ser una cadena de texto");
        }
        this.#nombre = value;
    }

    // --- eslora ---
    get eslora() {
        return this.#eslora;
    }
    set eslora(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("La eslora debe ser un número");
        }
        this.#eslora = value;
    }

    // --- manga ---
    get manga() {
        return this.#manga;
    }
    set manga(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("La manga debe ser un número");
        }
        this.#manga = value;
    }

    // --- calado ---
    get calado() {
        return this.#calado;
    }
    set calado(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El calado debe ser un número");
        }
        this.#calado = value;
    }

    // --- usuario_dueno_cedula ---
    get usuario_dueno_cedula() {
        return this.#usuario_dueno_cedula;
    }
    set usuario_dueno_cedula(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La cédula del dueño debe ser una cadena de texto");
        }
        this.#usuario_dueno_cedula = value;
    }

    // --- id_tipo ---
    get id_tipo() {
        return this.#id_tipo;
    }
    set id_tipo(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El id_tipo debe ser un número");
        }
        this.#id_tipo = value;
    }

    // --- empleado_cargo ---



    // --- toJSON ---
    toJSON() {
        return {
            matricula: this.#matricula,
            nombre: this.#nombre,
            eslora: this.#eslora,
            manga: this.#manga,
            calado: this.#calado,
            usuario_dueno_cedula: this.#usuario_dueno_cedula,
            id_tipo: this.#id_tipo,
            
        };
    }
}
