
const db = require('../db/user');
const pass = require('../general/password');

class user{
    
    constructor(dbUser, passwordHasher){
     
        const db = dbUser;
        this.hasher = passwordHasher;
        
    }    
    
    async create(email, name, password, address){
        
        let password_hash = await this.getPasswordHash(password);
        return await this.db.create(email, name, password_hash, address);
        
    },
    
    
    
    async edit(id, email, name, address){
        
        return await this.db.edit(id, email, name, address);
        
    },
    
    
    async remove(id){
        
        return await this.db.remove(id);
        
    },
    
    async getPasswordHash(password){
        
        return await this.hasher.hash(password);
    }
    
}

module.exports = new user(dbUser, pass);

