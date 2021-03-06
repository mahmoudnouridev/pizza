const baseController = require('./baseController');
const dbUser = require('../db/user');
const pass = require('../general/password');
const config = require('../config/main').session;

class sess extends baseController{
    
    constructor(dbUser, hasher){
     
        super();
        
        this.user = dbUser;
        this.hasher = hasher;
        
    }    
    
    async login(req, res){
        
        let expected = {'email': {'maxLen': 30, 'email': 1}, 'password': {'minLen': 6, 'maxLen': 500}};
        let required = ['email', 'password'];
        this.validator.checkStrings(req, expected, required);
        
        if(this.hasError()){
            
            res.send({'error': 'something was wrong'});
            return;
        }
       
        let info = await this.user.getLoginInfo(this.clean.email);
        
        if(!info){
            
            res.send({'error': 'something was wrong'});
            return;
        }
        
        if( await this.hasher.verify(password, info.password_hash) )
        {
            this.keepAuthInfo(req, info._id);
            res.send({'action': true});
            return;
        }
        
        res.send({'error': 'something was wrong'});
    }
    
    
    keepAuthInfo(req, userId){
        
        req.session.user_id = userId;
        req.session.auth_time = + new Date();
        
    }
    
    logout(req, res){
        
        this.removeAuthInfo(req);
        res.send({});
        
    }
    
    isLive(req){
        
        let current_time = + new Date();
        
        if(req.session.hasOwnProperty('auth_time')){
            
            if(req.session.auth_time + config.lifetime_in_seconds >= current_time)
            {
                // update auth time after any request
                req.session.auth_time = current_time;
                return true;
            }    
                
            this.removeAuthInfo(req);     
        }
        return false;
        
    }
    
    removeAuthInfo(req){
        
        delete req.session.user_id;
        delete req.session.auth_time;
        
    }
    
    isAdmin(req){
        
        return this.isLive(req) && req.session.hasOwnProperty('is_admin');
        
    }    

}


module.exports = new sess(dbUser, pass);


