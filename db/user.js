const db = require('./mongoConnector');

class user{
    
    
    async create(email, name, password, address){
        
        let con = db.getConnection();
        let doc = {'email': email, 'name': name, 'password_hash': password, 'address': address, 'basket': {} };
        return await con.users.insertOne( doc );
        
    }
    
    async edit(id, email, name, address){
        
        let con = db.getConnection();
        return await con.users.updateOne({'_id': id},{
           
            $set:{
                
                'emai email,
                'name': name,
                'address': address
                
            }
            
        });
        
    }
    
    async remove(id){
        
        let con = db.getConnection();
        return await con.deleteOne({'_id': id});
        
    }
    
    async getLoginInfo(email){
        
        let con = db.getConnection();
        let projection = {'password_hash': 1};
        return await con.users.findOne({'email': email}, {$projection: projection});
        
    }
    
}

module.exports = user;


