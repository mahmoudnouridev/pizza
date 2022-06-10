const db = require('./mongoConnector');

class food{
    
    
    async addNewItem(name, price){
        
        let con = await db.getConnection();
        return await con.menu.insertOne({'name': name, 'price': price});
        
    }
    
    async getAll(){
        
        let con = await db.getConnection();
        return await con.menu.find({}).toArray();
        
    }
    
    
    
    
    
}

module.exports = food;
