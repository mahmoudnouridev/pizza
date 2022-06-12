const dbBasket = require('../db/basket');

class basket{
    
    constructor(dbBasket){
        
        const db = dbBasket;
        
    }
    
    async addItem(userId, foodId, quantity){
        
        return await this.db.addItem(userId, foodId, quantity);        
    }
    
    async getAllItems(userId){
        
        return await this.db.getAllItems(userId);
        
    }  
    
}


module.exports = new basket();
