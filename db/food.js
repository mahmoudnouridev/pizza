const dbBase = require('./dbBase');
const mongoConnector = require('./mongoConnector');

class food extends dbBase{
    
    
    async addNewItem(name, price){
        
        let con = await this.dbConnector.getConnection();
        return await con.menu.insertOne({'name': name, 'price': price});
        
    }
    
    async getAll(){
        
        let con = await this.dbConnector.getConnection();
        return await con.menu.find({}).toArray();
        
    }
}

module.exports = new food(mongoConnector);
