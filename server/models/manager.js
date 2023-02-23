var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var manager= new Schema({
    username: String,
    password: String,
    profile:String,
    gamertag:String,
    firstname:String,
    lastname:String,
    info:String,
    zip:String,
    phone:String,
    binary:Date,
});

var Manager = mongoose.model('manager', manager);

//reset manager
let data = {
    username: 'admin',
    password: '123456',
    profile:'hello !',
    gamertag:'0001',
    firstname:'Liu',
    lastname:'Yong',
    info:'changsha china',
    zip:'410000',
    phone:'123456789',
    binary:'2019-10-10',
}
let m = new Manager(data)
m.save(function (error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log('reset success')

    }
})
module.exports = Manager;
