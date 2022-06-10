const db = require('db');

class basket extends db{
    
    
    addItem(userId, foodId, quantity){
        
        let selector = {'_id': userId, 'basket.food_id': foodId};
        let food_id = await db.con.users.findOne(selector, {$projection:{'basket.food_id': 1, '_id': 0}});
        
        if(food_id){
            
            //update item
            let inc = {$inc: {'basket.quantity': quantity}};
            return await db.con.users.updateOne(selector, inc);
            
            
        }
        
        //else insert new item
        
        return await db.con.users.updateOne({'_id': userId}, {
            
            $set:{
                
                'basket':{
                    
                    'food_id': food_id,
                    'quantity': quantity                    
                }
                
            }
            
            
        });
    }
    
    async getAllItems(userId){
        
        let projection = {$projection: {'basket': 1}};
        return db.con.users.find({'_id': userId}, projection);
        
    }
    
}


module.exports = basket;





