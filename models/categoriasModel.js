const pool = require('../config/database');

class Categorias {
  static async findAll() {
    const result = await pool.query('SELECT * FROM Categorias');
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM Categorias WHERE idCategoria = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await pool.query(
      'INSERT INTO Categorias (nombre, descripcion) VALUES ($1, $2) RETURNING *',
      [data.nombre, data.descripcion]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await pool.query(
      'UPDATE Categorias SET nombre = $1, descripcion = $2 WHERE idCategoria = $3 RETURNING *',
      [data.nombre, data.descripcion, id]
    );
    return result.rows[0]; 
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM Categorias WHERE idCategoria = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Categorias;


