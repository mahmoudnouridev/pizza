class InputValidator{
    
    constructor(caller){
        
        this.caller = caller;
        this.current = {key: null, value: null};
        this.currentInput = null;
    }
    
    checkStrings(req, expected, required){
        
        this.req = req;
        this.expected = expected;
        this.required = required;
        
        let key = '';
        for(key in this.expected){
            
            this.current.key = key;
            this.current.value = this.expected[key];
            
            if(!this.exists()){
                
                if(this.isRequired())
                {
                    this.caller.setError(this.current.key, 'required', true);
                    delete this.current.value.required;
                }           
            }
            else{

            this.currentInput = this.castToString(this.req[key]);
            
            // run expected rules on current input one by one!
            let rule = '';
            let is_clean = true;
            for(rule in this.current.value){
                
                if( typeof this[rule] !== 'function' )
                    throw 'Does not exists method ' + rule;
                
                let expected_value = this.current.value[rule];
                if( !this[rule](expected_value) )
                {
                    this.caller.setError(this.current.key, rule, expected_value);
                    is_clean = false;
                    break;
                }
            }
            
            if(is_clean)
                this.caller.setClean(this.current.key, this.currentInput); 
                        
            
        }
        
        this.caller.setClean(this.clean);
        }
    }
    
    exists(){
        
        return this.req.hasOwnProperty(this.current.key);
        
    }
    
    
    isRequired(){
        
        return this.required.indexOf(this.current.key) != 0;
        
    }
    
    castToString(value){
        
        let type = typeof value;
        if(type == 'Object')
            return '';
        
        if(type == 'number')
            return value + '';
        
        return value.trim();
        
    }
    
    
    maxLen(val){
        
        return val >= this.currentInput.length;
        
    }
    
    minLen(val){
        
        return val <= this.currentInput.length;
        
    }
    
    alphanumeric(){
        
        let pattern = /^[0-9a-z_]$/i;
        return pattern.test(this.currentInput);
        
    }
    
    email(){
        
        let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return this.currentInput.match(pattern);
    } 
      
    
}



module.exports = InputValidator;



