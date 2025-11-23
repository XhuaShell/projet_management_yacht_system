export class AsignacionAmarre {
    #id_asignacion;
    #matricula_yate;
    #num_amarre;
    #fecha_inicio;
    #fecha_fin;
    #monto;
    #usuario_solicitante_cedula;
    #tipo_asignacion;

    constructor(asg = {}) {
        if (
            typeof asg.matricula_yate !== "string" ||
            typeof asg.num_amarre !== "number" ||
            typeof asg.fecha_inicio !== "string" ||
            typeof asg.usuario_solicitante_cedula !== "string" ||
            typeof asg.tipo_asignacion !== "string"
        ) {
            throw new Error("Información no ingresada correctamente");
        }

        this.id_asignacion = asg.id_asignacion ?? null;
        this.matricula_yate = asg.matricula_yate ?? null;
        this.num_amarre = asg.num_amarre ?? null;
        this.fecha_inicio = asg.fecha_inicio ?? null;
        this.fecha_fin = asg.fecha_fin ?? null;
        this.monto = asg.monto ?? null;
        this.usuario_solicitante_cedula = asg.usuario_solicitante_cedula ?? null;
        this.tipo_asignacion = asg.tipo_asignacion ?? null;
    }

    get id_asignacion() {
        return this.#id_asignacion;
    }
    set id_asignacion(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El id_asignacion debe ser un número");
        }
        this.#id_asignacion = value;
    }

    get matricula_yate() {
        return this.#matricula_yate;
    }
    set matricula_yate(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La matrícula del yate debe ser una cadena de texto");
        }
        this.#matricula_yate = value;
    }

    get num_amarre() {
        return this.#num_amarre;
    }
    set num_amarre(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El número de amarre debe ser un número");
        }
        this.#num_amarre = value;
    }

    get fecha_inicio() {
        return this.#fecha_inicio;
    }
    set fecha_inicio(value) {
        this.#fecha_inicio = value;
    }

    get fecha_fin() {
        return this.#fecha_fin;
    }
    set fecha_fin(value) {
        this.#fecha_fin = value;
    }

    get monto() {
        return this.#monto;
    }
    set monto(value) {
        if (value !== null && typeof value !== "number") {
            throw new Error("El monto debe ser un número decimal");
        }
        this.#monto = value;
    }

    get usuario_solicitante_cedula() {
        return this.#usuario_solicitante_cedula;
    }
    set usuario_solicitante_cedula(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("La cédula del solicitante debe ser texto");
        }
        this.#usuario_solicitante_cedula = value;
    }

    get tipo_asignacion() {
        return this.#tipo_asignacion;
    }
    set tipo_asignacion(value) {
        const permitidos = ["PROPIETARIO", "ALQUILER", "RESERVA"];
        if (value !== null && !permitidos.includes(value)) {
            throw new Error("Tipo de asignación inválido");
        }
        this.#tipo_asignacion = value;
    }

    toJSON() {
        return {
            id_asignacion: this.#id_asignacion,
            matricula_yate: this.#matricula_yate,
            num_amarre: this.#num_amarre,
            fecha_inicio: this.#fecha_inicio,
            fecha_fin: this.#fecha_fin,
            monto: this.#monto,
            usuario_solicitante_cedula: this.#usuario_solicitante_cedula,
            tipo_asignacion: this.#tipo_asignacion,
        };
    }
}
