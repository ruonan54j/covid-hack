// TODO : making WAF for security 
const {db} = require('../util/admin');
const partCollection = db.collection('part');

exports.findPart = function(req , res , next){
    var id = req.body.partID;
    partCollection.doc(id).get().then((snapshot) => {
        if (!snapshot.exists){
            console.log("part id not found ");
            res.status(204).json({error:"Part with id : " + id + " doesn't exist"});
        }else{
            res.status(200).json(snapshot);
        }
    }).catch(err => {
        console.log("error getting data " + err);
        res.status(500).json({msg:"can't retrive data"});
    })
}

// get part will send all the parts data , if you want to search data , you can use findPart()
exports.getPart = function(req , res , next){
    partCollection.get().then((data) => {
        parts = [];
        data.forEach(d => {
            data.push(d.data());
        });
        if (parts.length > 0){
            res.status(200).json(parts);
        }else{
            res.status(204).json({msg:"No parts data"});
        }
    })
}

exports.createPart = function(req , res , next){
    // TODO : validate user input data 
    var partData = req.body;

    var add = partCollection.add(partData);
    res.status(200).json({msg:"ok"});
}

exports.updatePart = function(req , res , next){
    // TODO : validate user input data 
    var data = req.body;
    var id   = req.params.partID;
    var getData = partCollection.doc(id).update(data).then((wr) => {
        res.status(200).json({msg:"ok"});
    }).catch((err) => {
        console.log("error : " + err);
        res.status(500).json({msg:"internal error"});
    })
}