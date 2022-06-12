const sess = require('../controller/sess');
const food = require('../controller/food');
const guard = require('./guard');

module.exports = function(app){

app.get('/login', (req, res)=>{
    
    //render login page
    
});


app.post('/login', (req, res)=>{
    
    // login user here
    sess.login(req, res);
    
});

app.get('/protected/logout', guard.auth, (req, res)=>{
   
   sess.logout(req, res);
    
});

app.get('/protected/menu', guard.auth, (req, res)=>{
    
    // send to user all menu items
    food.getAll(req, res);
    
});

app.post('/admin/menu/add', guard.only_admin, (req, res)=>{
    
    food.create(req, res);
    
});

app.get('/register', (req, res)=>{
    
    // render register page
});

app.post('/register', (req, res)=>{
    
   user.create(req, res);
    
});

}
