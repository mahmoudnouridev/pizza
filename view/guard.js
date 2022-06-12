const sess = require('../controller/sess');


const auth_fail = function(res){
    
    res.write('403 Forbidden Area');
    res.end();
}

const auth = function(req, res, next){
    
    if(sess.isLive(req)){
        return next();
    }
    
    auth_fail(res);
}

const only_admin = function(req, res, next){
    
    
    if(sess.isAdmin(req)){
        
        return next();
    }
    
    auth_fail(res);
    
}


module.exports = {auth, only_admin};
