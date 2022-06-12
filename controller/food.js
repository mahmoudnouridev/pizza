const baseController = require('./baseController');
const foodModel = require('../model/food');

class Food extends baseController{
    
    constructor(foodModel){
     
        super();
        this.food = foodModel;
        
    }    
    
    async create(req, res){
        
        let expected = {'name':{'minLen': 4, 'maxLen': 30}, 'price': {'minLen': 4, 'maxLen': 10, 'digit': true}};
        let required = ['name', 'price'];
        this.validator.checkStrings(req, expected, required);
        
        if(this.hasError()){
            
            res.send({'error': this.errors});
            return;
        }
        
        await this.food.create(this.clean.name, this.clean.price);        
        
        res.send({'action': true});
        
    }
    
    async getAll(req, res){
              
        res.send( await this.food.getAll() );        
    }   
}

module.exports = new Food(foodModel);
