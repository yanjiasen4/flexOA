module.exports = {
  createCompany: function(company){
  	Company.create(company).exec(function createCB(err, created){
      if(err){
      	return -1;
      }else{
        return 0;
      }
    });
  }
}