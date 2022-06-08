const bcrypt = require('bcrypt');
const config = require('../config/main.js');

module.exports = {
    
    cost : config.password.cost ?? 12,
        
    hash: async function(password){
        
        return await bcrypt.hash(password, this.cost);
    },
    
    
    verify: async function(plainPassword, hashedPassword){
        
        return await bcrypt.compare(plainPassword, hashedPassword);    
    }
     
    
}
