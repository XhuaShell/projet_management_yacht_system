export const str = (v) => {
    v === undefined || v === null || v === "" ? null : String(v);
};

export const float = (v) => {
    if (v === undefined || v === null || v === "") return null;
    const n = parseFloat(v);
    return Number.isNaN(n) ? null : n;
};

export const int = (v) => {
    if (v === undefined || v === null || v === "") return null;
    const n = parseInt(v);
    return Number.isNaN(n) ? null : parseInt(v);
};

// Ésta la hizo chatgpt la verdad, no entiendo la mitad de ésta función.
export const date = (v) => {
    if (v == null || v === "") return null;

    if (typeof v !== "string") return null;

    // Regex formato YYYY-MM-DD
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(v)) return null;

    const d = new Date(v);

    // Fecha inválida → Date("2020-13-40") es "Invalid Date"
    if (Number.isNaN(d.getTime())) return null;

    // Asegurar que la fecha convertida coincide (Date puede corregir automáticamente)
    const [y, m, day] = v.split("-").map(Number);
    if (
        d.getUTCFullYear() !== y ||
        d.getUTCMonth() + 1 !== m ||
        d.getUTCDate() !== day
    ) {
        return null;
    }

    return v; // formato validado
};

