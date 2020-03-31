var mongoose =  require("mongoose");
var Schema   = mongoose.Schema;

var data_collections = new Schema({
  id_user   : {type:Number , required:true },
  id_design : {type:Number , required:true },
},{
    timestamps:true
});

var data_collections = mongoose.model("data_collections",data_collections);

module.exports = data_collections;
