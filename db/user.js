const dbBase = require('./dbBase');
const db = require('./mongoConnector');

class user extends dbBase{
    
    
    async create(email, name, password, address){
        
        let con = await this.dbConnector.getConnection();
        let doc = {'email': email, 'name': name, 'password_hash': password, 'address': address, 'basket': {} };
        return await con.users.insertOne( doc );
        
    }
    
    async edit(id, email, name, address){
        
        let con = await this.dbConnector.getConnection();
        return await con.users.updateOne({'_id': id},{
           
            $set:{
                
                'emai email,
                'name': name,
                'address': address
                
            }
            
        });
        
    }
    
    async remove(id){
        
        let con = await this.dbConnector.getConnection();
        return await con.deleteOne({'_id': id});
        await 
    }
    
    async getLoginInfo(email){
        
        let con = await this.dbConnector.getConnection();
        let projection = {'password_hash': 1};
        return await con.users.findOne({'email': email}, {$projection: projection});
        
    }
    
}

module.exports = new user(mongoConnector);


