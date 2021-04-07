const pool = require('../utils/pool.js');

module.exports = class Fungi {
    id;
    fungiName;
    fungiDescription;

    constructor(row){
        this.id = row.id;
        this.fungiName = row.fungi_name;
        this.fungiDescription = row.fungi_description;
    }

    static async insert({fungiName, fungiDescription}){
        const {rows}= await pool.query('INSERT INTO fungi (fungi_name, fungi_description) VALUES ($1, $2) RETURNING *', [fungiName, fungiDescription]);
        return new Fungi(rows[0]);
    }

    static async getFungi() {
        try {
          const { rows } = await pool.query('SELECT * FROM fungi');
          return rows.map(fungus =>  new Fungi(fungus));
        } catch(error) {
          error;
        }
      }
}
