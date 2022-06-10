const config = {
    
    db: {
        
        mongodb:{
        
            username: '',
            password: '',
            host: '127.0.0.1',
            port: '27017',
            options: ''
            
        }                
    },
    
    password:{
     
        cost: 12
    },
    
    session:{
        
        lifetime_in_seconds: 1800// 30 minutes to logout automatically
        
    }
    
    
    
}


module.exports = config;
