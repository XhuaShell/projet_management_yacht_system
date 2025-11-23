export class Usuario {
    #cedula;
    #nombre;
    #direccion;
    #telefono;
    #fecha_vinculacion;
    #contrasena;
    #mail;
    #tipo_usuario;

    constructor(user = {}) {
        if (
            typeof user.cedula !== "string" ||
            typeof user.contrasena !== "string"
        ) {
            throw new Error("Información no ingresada correctamente");
        }

        this.cedula = user.cedula ?? null;
        this.nombre = user.nombre ?? null;
        this.direccion = user.direccion ?? null;
        this.telefono = user.telefono ?? null;
        this.fecha_vinculacion = user.fecha_vinculacion ?? null;
        this.contrasena = user.contrasena ?? null;
        this.mail = user.mail ?? null;
        this.tipo_usuario = user.tipo_usuario ?? null;
    }

    get cedula() {
        return this.#cedula;
    }
    set cedula(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La cédula debe ser una cadena de texto");
        }
        this.#cedula = value;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(value) {
        this.#nombre = value;
    }

    get direccion() {
        return this.#direccion;
    }
    set direccion(value) {
        this.#direccion = value;
    }

    get telefono() {
        return this.#telefono;
    }
    set telefono(value) {
        this.#telefono = value;
    }

    get fecha_vinculacion() {
        return this.#fecha_vinculacion;
    }
    set fecha_vinculacion(value) {
        this.#fecha_vinculacion = value;
    }

    get contrasena() {
        return this.#contrasena;
    }
    set contrasena(value) {
        this.#contrasena = value;
    }

    get mail() {
        return this.#mail;
    }
    set mail(value) {
        if (value && !/^[\w.-]+@[\w.-]+\.\w+$/.test(value)) {
            throw new Error("Formato de correo inválido");
        }
        this.#mail = value;
    }

    get tipo_usuario() {
        return this.#tipo_usuario;
    }
    set tipo_usuario(value) {
        this.#tipo_usuario = value;
    }
    toJSON() {
        return {
            cedula: this.#cedula,
            nombre: this.#nombre,
            direccion: this.#direccion,
            telefono: this.#telefono,
            fecha_vinculacion: this.#fecha_vinculacion,
            mail: this.#mail,
            tipo_usuario: this.#tipo_usuario,
        };
    }
}
