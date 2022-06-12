const sess = require('../controller/sess');
const food = require('../controller/food');
const guard = require('./guard');

module.exports = function(app){

app.get('/login', (req, res)=>{
    
    //render login page
    
});


app.get('/register', (req, res)=>{
    
    // render register page
});
    

app.post('/login', sess.login);

app.get('/protected/logout', guard.auth, sess.logout);
    
app.get('/protected/menu', guard.auth, food.getAll);

app.post('/admin/menu/add', guard.only_admin, food.create);

app.post('/register', user.create);

}
