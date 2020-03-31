var mongoose =  require("mongoose");
var Schema   = mongoose.Schema;

var data_design_categorys = new Schema({
  category_name :   {type:String , required:true },
  description   :   {type:String , required:true },
},{
    timestamps:true
});

var data_design_categorys = mongoose.model("data_design_categorys",data_design_categorys);

module.exports = data_design_categorys;
