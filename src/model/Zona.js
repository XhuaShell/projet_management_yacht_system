export class Zona {
    #id_zona;
    #cuota_administracion;
    #capacidad;
    #profundidad;
    #dim_max_eslora;
    #dim_max_manga;
    #dim_max_calado;
    #dim_min_eslora;
    #dim_min_manga;
    #dim_min_calado;

    constructor(zona = {}) {
        if (
            typeof zona.id_zona !== "string" ||
            typeof zona.cuota_administracion !== "number" ||
            typeof zona.capacidad !== "number" ||
            typeof zona.profundidad !== "number"
        ) {
            throw new Error("Información no ingresada correctamente");
        }

        this.id_zona = zona.id_zona ?? null;
        this.cuota_administracion = zona.cuota_administracion ?? null;
        this.capacidad = zona.capacidad ?? null;
        this.profundidad = zona.profundidad ?? null;
        this.dim_max_eslora = zona.dim_max_eslora ?? null;
        this.dim_max_manga = zona.dim_max_manga ?? null;
        this.dim_max_calado = zona.dim_max_calado ?? null;
        this.dim_min_eslora = zona.dim_min_eslora ?? null;
        this.dim_min_manga = zona.dim_min_manga ?? null;
        this.dim_min_calado = zona.dim_min_calado ?? null;
    }

    get id_zona() {
        return this.#id_zona;
    }
    set id_zona(value) {
        if (value !== null && typeof value !== "string") {
            throw new Error("El id_zona debe ser una cadena");
        }
        this.#id_zona = value;
    }

    get cuota_administracion() {
        return this.#cuota_administracion;
    }
    set cuota_administracion(value) {
        this.#cuota_administracion = value;
    }

    get capacidad() {
        return this.#capacidad;
    }
    set capacidad(value) {
        this.#capacidad = value;
    }

    get profundidad() {
        return this.#profundidad;
    }
    set profundidad(value) {
        this.#profundidad = value;
    }

    get dim_max_eslora() {
        return this.#dim_max_eslora;
    }
    set dim_max_eslora(value) {
        this.#dim_max_eslora = value;
    }

    get dim_max_manga() {
        return this.#dim_max_manga;
    }
    set dim_max_manga(value) {
        this.#dim_max_manga = value;
    }

    get dim_max_calado() {
        return this.#dim_max_calado;
    }
    set dim_max_calado(value) {
        this.#dim_max_calado = value;
    }

    get dim_min_eslora() {
        return this.#dim_min_eslora;
    }
    set dim_min_eslora(value) {
        this.#dim_min_eslora = value;
    }

    get dim_min_manga() {
        return this.#dim_min_manga;
    }
    set dim_min_manga(value) {
        this.#dim_min_manga = value;
    }

    get dim_min_calado() {
        return this.#dim_min_calado;
    }
    set dim_min_calado(value) {
        this.#dim_min_calado = value;
    }

    toJSON() {
        return {
            id_zona: this.#id_zona,
            cuota_administracion: this.#cuota_administracion,
            capacidad: this.#capacidad,
            profundidad: this.#profundidad,
            dim_max_eslora: this.#dim_max_eslora,
            dim_max_manga: this.#dim_max_manga,
            dim_max_calado: this.#dim_max_calado,
            dim_min_eslora: this.#dim_min_eslora,
            dim_min_manga: this.#dim_min_manga,
            dim_min_calado: this.#dim_min_calado,
        };
    }
}
