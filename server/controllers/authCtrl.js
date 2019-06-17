const bcrypt=requre('bcryptjs')

module.exports= {

  createUser: async (req, res)=> {
    let {firstName, lastName, email, pass}= req.body
    let database=req.app.get('db')
    let {session}= req


    //check to see if user exists 
try {
  let exists= await database.does_user_exist(email)
  if(exists){
    res.status(409).send({
      message:"A user has already registered with that email. You may already have an account. Try logging in."
    })
  }


} catch (error) {
  res.sendStatus(500)
}



    database.create_new_user([firstName, lastName, email, pass])
    




  }

}