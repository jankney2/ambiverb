const bcrypt = require('bcryptjs')

module.exports = {

  createUser: async (req, res) => {
    let { firstName, lastName, email, pass, username } = req.body
    let database = req.app.get('db')
    let { session } = req


    //check to see if user exists 
    try {
      let exists = await database.does_user_exist(email)

      if (+exists[0].count !== 0) {
        res.status(409).send({
          message: "A user has already registered with that email. You may already have an account. Try logging in."
        })
      } else {




        let salt = bcrypt.genSaltSync(10)
        let hashedPass = bcrypt.hashSync(pass, salt)

        let newUser = await database.create_user([firstName, lastName, email, username, hashedPass])

        session.user = newUser[0]
        session.user.isLoggedIn = true
        res.status(200).send(session)


      }

    } catch (error) {
      res.sendStatus(500)
      console.log(error, 'error with registration')
    }


    try {


    } catch (error) {
      res.status(500).send(error)
    }




  },

  login: async (req, res) => {
    let { email, pass } = req.body
    let database = req.app.get('db')
    let {session}= req
    
    
    try {
let dbUser = await database.get_user_by_email(email)
console.log(dbUser, "dbuser")

let authenticated= bcrypt.compareSync(pass, dbUser[0].hashed_pass)
console.log(authenticated)

if(authenticated) {
  console.log('if hit', session)
  session.user=dbUser[0]
  delete session.user.hashed_pass
  session.user.isLoggedIn=true
  console.log('session', session)
  res.status(200).send(session)

}else{
  res.send({
    message: "There is no user associated with that email. Would you like to register?"
  })
}

    } catch (error) {
      res.status(500).send(error)
    }


  },

  logout: (req, res) => {
    req.session.destroy()

    res.sendStatus(200)
  }

}