const baseController = require('./baseController');
const userModel = require('../model/user');

class user extends baseController{
    
    constructor(userModel){
     
          super();
          
          this.user = userModel;
          
    }      
      
    async create(req, res){
        
        let password_rules = {'minLen': 8};
        let expected = {'email': {'email': true, 'maxLen': 30}, 'fname': {'minLen': 3, 'maxLen': 20}, 'address':{'maxLen': 30}, 'password': password_rules, 'password_confirm': password_rules};
        let required = ['email', 'fname', 'address', 'password', 'password_confirm'];
        this.validator.checkStrings(req, expected, required);
        
        if(this.hasError())
        {
            res.send({'error': this.errors});
            return;
        }
        if(this.clean.password !== this.clean.password_confirm)
        {
            this.setError('password_confirm', 'match', 'password');
            res.send({'error': this.errors});
            return;
        }
       
        await this.user.create(this.clean.email, this.clean.fname, this.clean.password, this.clean.address);
        
        res.send({'action': true});            
    }
    
}


module.exports = new user(userModel);
