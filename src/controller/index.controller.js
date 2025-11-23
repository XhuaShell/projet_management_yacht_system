

export const ping = async (req, res) => {
    const result = await pool.query("SELECT 1 + 1 AS result");
    REPOSITORY.socioRepository.getAll()
    res.json(result[0])
}

