const foodDb = require('../db/food');

class food{
    
    constructor(){
        
        const db = new foodDb() 
        
    }
    
    async create(name, price){
        
        return await this.db.addNewItem(name, price);
        
    }
    
    async getAll(){
        
        return await this.db.getAll();
        
    }
     
}

module.exports = food;
