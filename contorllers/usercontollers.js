const users = require('../users.json');

function getUser(req,res){
  try{
    res.json(users);
  }catch(err){
    console.log(err);
  }
}

function particulerUser(req,res){
  try{
    let id = parseInt(users.params.id);
    let user = users.find((user)=>user.id===id);
    res.json(user);
  }catch(err){
    console.log(err);
  }
}

module.exports={
  getUser,
  particulerUser
}