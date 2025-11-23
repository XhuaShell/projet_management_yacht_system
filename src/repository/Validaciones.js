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
    return Number.isNaN(n) ? null : n;
};
