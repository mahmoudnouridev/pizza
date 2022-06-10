const db = require('db');

class food extends db{
    
    
    async addNewItem(name, price){
        
        return await db.con.menu.insertOne({'name': name, 'price': price});
        
    }
    
    async getAll(){
        
        return await db.con.menu.find({});
        
    }
    
    
    
    
    
}

module.exports = food;
