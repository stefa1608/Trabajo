const Users = require ('./auth.controller');
const Products= require ('./auth.controller');
module.exports = (router)=>{
    router.post('/nuevoproducto',Products.createProduct)
    router.post('/register',Users.createUser);
    router.post('/login',Users.loginUser);
}
