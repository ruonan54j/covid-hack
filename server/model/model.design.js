var mongoose =  require("mongoose");
var Schema   = mongoose.Schema;

var data_designs = new Schema({
  id_design_category : {type:Number , required:true },
  design_name        : {type:String , required:true },
  description        : {type:String , required:true },
  file_path          : {type:String , required:true },
  thumb1             : {type:String , required:true },
  thumb2             : {type:String , required:true },
  thumb3             : {type:String , required:true },
},{
    timestamps:true
});

var data_designs = mongoose.model("data_designs",data_designs);

module.exports = data_designs;
