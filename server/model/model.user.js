var mongoose =  require("mongoose");
var Schema   = mongoose.Schema;

var data_users = new Schema({
    username      : {type:String , required:true , unique:true},
    password      : {type:String , required:true },
    email         : {type:String , required:true},
    phone         : {type:String , required:true},
    location      : {type:String , required:true},
    photo_profile : {type:String , required:true},
    userType      : {type:String , required:true},
},{
    timestamps:true
});

var data_users = mongoose.model("data_users",data_users);

module.exports = data_users;
