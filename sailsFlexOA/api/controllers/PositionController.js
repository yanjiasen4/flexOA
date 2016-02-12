module.exports = {
  addPosition: function(req,res){
    var position = req.allParams();
    Position.create(position).exec(function createCB(err, created){
      if(err){
        return -1;
      }else{
        return 0;
      }
    });
  },
  updatePosition: function(req,res){
    var positionID = req.param('positionID');
    var positionName = req.param('positionName');
    Position.update({positionID: positionID},{positionName: positionName})
    .exec(function(err)){
      if(err) 
        return -1;
      else
        return 0;
    }
  },
};
