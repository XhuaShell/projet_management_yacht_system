export class Empleado {
    #id_empleado;
    #cedula;
    #nombre;
    #salario;
    #direccion;
    #telefono;
    #correo;

    constructor(emp = {}) {
        // Validaciones obligatorias según el SQL:
        // cedula NOT NULL, nombre NOT NULL
        if (
            typeof emp.cedula !== "string" ||
            typeof emp.nombre !== "string"
        ) {
            throw new Error("Información no ingresada correctamente");
        }

        this.id_empleado = emp.id_empleado ?? null;
        this.cedula = emp.cedula ?? null;
        this.nombre = emp.nombre ?? null;
        this.salario = emp.salario ?? null;
        this.direccion = emp.direccion ?? null;
        this.telefono = emp.telefono ?? null;
        this.correo = emp.correo ?? null;
    }

    // id_empleado (INT AUTO_INCREMENT → number o null)
    get id_empleado() {
        return this.#id_empleado;
    }
    set id_empleado(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El id_empleado debe ser numérico");
        }
        this.#id_empleado = value;
    }

    // cedula (string obligatorio)
    get cedula() {
        return this.#cedula;
    }
    set cedula(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La cédula debe ser una cadena de texto");
        }
        this.#cedula = value;
    }

    // nombre (string obligatorio)
    get nombre() {
        return this.#nombre;
    }
    set nombre(value) {
        this.#nombre = value;
    }

    // salario (decimal opcional)
    get salario() {
        return this.#salario;
    }
    set salario(value) {
        if (value !== null && isNaN(Number(value))) {
            throw new Error("El salario debe ser un número válido");
        }
        this.#salario = value;
    }

    // direccion (string opcional)
    get direccion() {
        return this.#direccion;
    }
    set direccion(value) {
        this.#direccion = value;
    }

    // telefono (string opcional)
    get telefono() {
        return this.#telefono;
    }
    set telefono(value) {
        this.#telefono = value;
    }

    // correo (string opcional, UNIQUE, validar formato)
    get correo() {
        return this.#correo;
    }
    set correo(value) {
        if (value && !/^[\w.-]+@[\w.-]+\.\w+$/.test(value)) {
            throw new Error("Formato de correo inválido");
        }
        this.#correo = value;
    }

    toJSON() {
        return {
            id_empleado: this.#id_empleado,
            cedula: this.#cedula,
            nombre: this.#nombre,
            salario: this.#salario,
            direccion: this.#direccion,
            telefono: this.#telefono,
            correo: this.#correo,
        };
    }
}
