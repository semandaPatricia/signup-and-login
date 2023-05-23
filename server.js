require('dotenv').config();
const express =require('express')
const app =express()
const path =require('path')
//const bcrypt =require('bcrypt')
const mongoose=require('mongoose')

const collection=require('./models/index')


const PORT = process.env.PORT || 3000

//connect to DB

mongoose.connect(process.env.MONGODB_URI ,{useNewUrlParser: true})
.then(client =>{
    console.log('Connected to Database...')
})
.catch(error => console.error(error))


//templating engine
app.set('view engine' ,'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
/*gets*/
app.get('/',(req,res)=>{
    res.render('home',{name:'pat'})
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

/*posts*/
app.post("/signup",async(req,res) =>{
    const data={
        name:req.body.name,
        password:req.body.password
    }
    await collection.insertMany([data])
res.render('home')
})
/*await collection.insertMany([data])
res.render('home')*/

/*app.post("/signup" ,(req,res) =>{
    const data = {
        name:req.body.name,
        password:req.body.password
    }
    data.save()
    .then(result => {
        res.redirect("/")
    })
})*/


app.post("/login",async(req,res) =>{
  try {
    let check=await collection.findOne({name:req.body.name})

    if (check.password ===req.body.password){
        res.render('home')
    }else{
        res.send("wrong password")
    }

  } catch (error) {
    res.send("wrong details")
  }
})




//listening port
app.listen (3000,()=>{
    console.log(`connected to ${PORT}`)
})