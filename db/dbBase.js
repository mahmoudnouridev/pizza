const mongoConnector = require('./mongoConnector');

class dbBase{
    
    constructor(mongoConnector){
        
        this.dbConnector = mongoConnector;
        
    }
    
}

module.exports = dbBase;
