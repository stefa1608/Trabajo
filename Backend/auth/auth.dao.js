const mongoose = require('mongoose');
const authSchema = require('./auth.model');
const prodSchema = require('./auth.model');
authSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  },
  login: function (query, cb) {
    this.find(query, cb);
  }
}
prodSchema.statics={
  create: function(data,cb){
    const Product = new this(data);
    Product.save(cb);
  }
}

const authModel = mongoose.model('Users', authSchema);
module.exports = authModel;
const prodModel= mongoose.model('Products',prodSchema);
module.exports= prodModel;