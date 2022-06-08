
const db = require('../db/user');
const pass = require('../general/password');

module.exports = {
    
    create: async function(email, name, password, address){
        
        let password_hash = await this.getPasswordHash(password);
        return await db.create(email, name, password_hash, address);
        
    },
    
    
    
    edit: async function(id, email, name, address){
        
        return await db.edit(id, email, name, address);
        
    },
    
    
    remove: async function(id){
        
        return await db.remove(id);
        
    },
    
    getPasswordHash: async function(password){
        
        return await pass.hash(password);
    }
    
}
