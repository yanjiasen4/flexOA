module.exports = {
  addCompany: function(req,res){
    var company = req.allParams();
    Company.create(company).exec(function createCB(err, created){
      if(err){
        return -1;
      }else{
        return 0;
      }
    });
  }
}