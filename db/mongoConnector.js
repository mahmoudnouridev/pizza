const client = require('mongodb').MongoClient;
const conInfo = require('../config/main.js').db.mongodb;

class mongoConnector{
    
    static connection = null;
    static info = conInfo;
    
    static async connect(){
        try{
            
            mongoConnector.connection = await client.connect(mongoConnector.getConnectionUri());
                
        }catch(err){
            
            console.log(err);
            
        }                
        
    }
    
    
    static getConnectionUri(connectionInfo){
        
        return `mongodb://${mongoConnector.info.username}:${mongoConnector.info.password}@${mongoConnector.info.host}:${mongoConnector.info.port}/${mongoConnector.info.dbname}`;    
        
    }
    
    static async getConnection(){
        
        if( !mongoConnector.connection )
            await mongoConnector.connect();
            
        return mongoConnector.connection;    
        
    }
      
    
}

module.exports = mongoConnector;











