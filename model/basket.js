const basketDb = require('../db/basket');

class basket{
    
    constructor(){
        
        const db = new basketDb();
        
    }
    
    async addItem(userId, foodId, quantity){
        
        return await db.addItem(userId, foodId, quantity);        
    }
    
    async getAllItems(userId){
        
        return await db.getAllItems(userId);
        
    }  
    
}


module.exports = basket;
