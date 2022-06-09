const db = require('db');

class user extends db{
    
    
    async create(email, name, password, address){
        
        let doc = {'email': email, 'name': name, 'password_hash': password, 'address': address};
        return await db.con.users.insertOne( doc );
        
    }
    
    async edit(id, email, name, address){
        
        return await db.con.users.updateOne({'_id': id},{
           
            $set{
                
                'email': email,
                'name': name,
                'address': address
                
            }
            
        });
        
    }
    
    async remove(id){
        
        return await db.con.deleteOne({'_id': id});
        
    }
    
    async getLoginInfo(email){
        
        let projection = {'password_hash': 1};
        return await db.con.users.findOne({'email': email}, {$projection: projection});
        
    }
    
    
    
    
}

module.exports = user;


