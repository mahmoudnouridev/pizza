const db = require('./dbBase');
const mongoConnector = require('./mongoConnector');

class basket{
    
    
    addItem(userId, foodId, quantity){
        
        let con = await this.dbConnector.getConnection();
        let selector = {'_id': userId, 'basket.food_id': foodId};
        let food_id = await con.users.findOne(selector, {$projection:{'basket.food_id': 1, '_id': 0}});
        
        if(food_id){
            
            //update item
            let inc = {$inc: {'basket.quantity': quantity}};
            return await con.users.updateOne(selector, inc);
            
            
        }
        
        //else insert new item
        
        return await con.users.updateOne({'_id': userId}, {
            
            $set:{
                
                'basket':{
                    
                    'food_id': food_id,
                    'quantity': quantity                    
                }
                
            }
            
            
        });
    }
    
    async getAllItems(userId){
        
        let con = await this.dbConnector.getConnection();
        let projection = {$projection: {'basket': 1}};
        return con.users.find({'_id': userId}, projection);
        
    }
    
}


module.exports = new basket(mongoConnector);


