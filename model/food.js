const dbFood = require('../db/food');

class food{
    
    constructor(dbFood){
        
        this.db = dbFood;
        
    }
    
    async create(name, price){
        
        return await this.db.addNewItem(name, price);
        
    }
    
    async getAll(){
        
        return await this.db.getAll();
        
    }
     
}

module.exports = new food(dbFood);
