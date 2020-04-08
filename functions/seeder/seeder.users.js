var config      = require("../config/env.js")
var crypto      = require("crypto");
var user        = require("../model/model.user.js");
var pass        = crypto.createHmac("sha256",config.KEY).update('toor').digest("hex");
var db          = require("../database/db.connection.js");

user.find({username:"root"} , function(err , data){
    if(err){
        console.log('Error: ' + err);
        throw err;
    }
    
    if(data.length === 0){
        var newData = new user({
            username:"root",
            password:pass,
            email:"arsalan.dp@gmail.com",
            phone:"+62000000000000",
            location:"36.206663, 137.175174",
            photo_profile:"none",
            userType:"buyer"
        });
        newData.save(function(err){
            if(err) throw err;
            console.log("user data created..");
        })
    }
});
