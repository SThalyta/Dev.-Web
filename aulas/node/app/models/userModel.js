const pool = require('../../config.js');

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
    update: async (id,name,email) => {
        const res = await pool.query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
            [name,email, id]
        );
        return res.rows[0];
    },
    delete: async (id) => {
        const res = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        return res.rows[0]; // retorna o usuário deletado ou undefined
    }, 
};

module.exports = User;
