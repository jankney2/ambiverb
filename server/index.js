require('dotenv').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const app = express()
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

const authCtrl= require('./controllers/authCtrl')
const listingCtrl=require('./controllers/listingCtrl')


app.use(express.json())
app.use(session({
  secret: SESSION_SECRET, 
  saveUninitialized:false, 

  resave: false, 
  cookie: {
    maxAge:1000*60*60*24,
      }
}))


massive(CONNECTION_STRING).then((database) => {

  app.set('db', database)
  console.log('DB connected')
}).catch(err=>console.log(err))

app.listen(SERVER_PORT, ()=> {
  console.log('listening on ', SERVER_PORT, "lmao")
})



//auth endpoints

app.post('/auth/register', authCtrl.createUser)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)


//user endpoints 

// app.get('/api/user', userCtrl.getUser)


//listing endpoints
app.post('/listings/create', listingCtrl.createListing)
app.get('/allListings', listingCtrl.getAll)
app.get('/listing/:id', listingCtrl.getIndividualListing)

//cart endpoints