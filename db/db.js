const mongoConnector = require('mongoConnector');

class db{
    
    static con = null;
    
    constructor(){
        
        db.con = async ()=>{
            
            return await mongoConnector.getConnection();
            
        }();
        
    }
    
    
    
    
}


module.exports = db;
