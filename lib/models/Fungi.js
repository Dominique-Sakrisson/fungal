const pool = require('../utils/pool.js');

module.exports = class Fungi {
    id;
    fungiName;
    fungiDescription;
    fungiImage;

    constructor(row){
      this.id = row.id;
      this.fungiName = row.name;
      this.fungiDescription = row.description;
    }
    static async insert({fungiName, fungiDescription}){
        const {rows}= await pool.query('INSERT INTO fungi (name, description) VALUES ($1, $2) RETURNING *', [fungiName, fungiDescription]);
        return new Fungi(rows[0]);
    }
    static async getAll(){
        try {
          const { rows } = await pool.query('SELECT * FROM fungi');
          return rows.map(fungus => new Fungi(fungus));
        } catch(error) {
          error;
        }
      }
    static async getById(id){
      try {
        const { rows } = await pool.query('SELECT * FROM fungi WHERE id = $1', [id])
        return new Fungi(rows[0]);
      } catch (error) {
        console.log(error);
      }
    }
    static async update(id, {fungiName, fungiDescription}){
      try {
        const {rows} = await pool.query('UPDATE fungi SET name = $2, description = $3  WHERE id = $1 RETURNING *', [id, fungiName, fungiDescription])
        return new Fungi(rows[0]);
      } catch (error) {
        
      }
    }
    static async delete(id){
      try {
        const {rows} = await pool.query('DELETE  FROM fungi WHERE id = $1 RETURNING *', [id])
        return new Fungi(rows[0]);
      } catch (error) {
        
      }
    }
}
