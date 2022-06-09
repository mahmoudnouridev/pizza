const validator = require('../general/inputValidator');

class BaseController{
    
    constructor(){
        
        this.errors = {};
        this.clean = {};
        this.validator = new validator(this)
        
    }
    
    setError(field, errorName, expectedValue) {
        
        this.errors[field] = {'error_name': errorName, 'expected': expectedValue};
        
    }
    
    setClean(field, value){
        
        this.clean.field = value;
        
    }
    
    hasError() {
        
        return this.errors.length > 0;
        
    }
       
}


module.exports = BaseController;
