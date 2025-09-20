const pool = require('../../config');

const User = {
    getAll: async () => {
        const res = await pool.query('SELECT * FROM users');
        return res.rows;
    },
    getById: async (id) => {
        const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.rows[0];
    },
    create: async (name,email) => {
        const res = await pool.query('INSERT INTO users (name,email) VALUES ($1, $2) RETURNING *', [name,email]);
        return res.rows[0];
    },
    
}
