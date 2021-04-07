const Fungi = require('../models/Fungi.js');

module.exports = class FungiService {
    static async create({fungiName, fungiDescription}){
        return await Fungi.insert({fungiName, fungiDescription});
    }
    static async getAll(){
        return await Fungi.getFungi(); 
      }
}
