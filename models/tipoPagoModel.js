const pool = require('../config/database');

class TipoPago {
  static async findAll() {
    const result = await pool.query('SELECT * FROM TipoPago');
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM TipoPago WHERE idTipoPago = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await pool.query(
      'INSERT INTO TipoPago (descripcion, activo) VALUES ($1, $2) RETURNING *',
      [data.descripcion, data.activo]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await pool.query(
      'UPDATE TipoPago SET descripcion = $1, activo = $2 WHERE idTipoPago = $3 RETURNING *',
      [data.descripcion, data.activo, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM TipoPago WHERE idTipoPago = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = TipoPago;

