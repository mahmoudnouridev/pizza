const sess = require('../controller/sess');
const food = require('../controller/food');


module.exports = function(app){

app.get('/login', (req, res)=>{
    
    //render login page
    
});


app.post('/login', (req, res)=>{
    
    // login user here
    let s = new sess();
    s.login(req, res);
    
});

app.get('/protected/logout', (req, res)=>{
   
   let s = new sess();
   s.logout(req, res);
    
});

app.get('/protected/menu', (req, res)=>{
    
    // send to user all menu items
    let controller = new food();
    controller.getAll(req, res);
    
});

app.post('/admin/menu/add', (req, res)=>{
    
    let controller = new food();
    controller.create(req, res);
    
});

app.get('/register', (req, res)=>{
    
    // render register page
});

app.post('/register', (req, res)=>{
    
   let controller = new user();
   controller.create(req, res);
    
});

}
