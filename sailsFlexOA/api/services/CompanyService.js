module.exports = {
  createCompany: function(company){
    Company.create(company).exec(function createCB(err, created){
      if(err){
        return -1;
      }else{
        return 0;
      }
    });
  },
  changeCompany: function(company){
    Company.update({companyId: company.companyId},company).exec(function updateCB(err, created){
      if(err){
        console.error(err);
        return -1;
      }else{
        return 0;
      }
    });
  }
}