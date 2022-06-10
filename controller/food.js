const baseController = require('./baseController');
const userModel = require('../model/food');

class food extends baseController{
    
    async create(req, res){
        
        let expected = {'name':{'minLen': 4, 'maxLen': 30}, 'price': {'minLen': 4, 'maxLen': 10, 'digit': true}};
        let required = ['name', 'price'];
        this.validator.checkStrings(req, expected, required);
        
        if(this.hasError()){
            
            res.send({'error': this.errors});
            return;
        }
        
        let f = new foodModel();
        
        await f.create(this.clean.name, this.clean.price);        
        
        res.send({'action': true});
        
    }
    
    async getAll(req, res){
        
        let f = new foodModel();
        
        res.send( await f.getAll() );        
    }   
}

module.exports = food;
