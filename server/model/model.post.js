var mongoose =  require("mongoose");
var Schema   = mongoose.Schema;

var data_posts = new Schema({
    id_user         : {type:Number , required:true },
    title           : {type:String , required:true },
    description     : {type:String , required:true },
    file_path       : {type:String , required:true },
    price           : {type:String , required:true },
    delivery_option : {type:String , required:true },
    note            : {type:String , required:true },
    thumb1          : {type:String , required:true },
    thumb2          : {type:String , required:true },
    thumb3          : {type:String , required:true },
},{
    timestamps:true
});

var data_posts = mongoose.model("data_posts",data_posts);

module.exports = data_posts;
