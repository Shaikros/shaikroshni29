


const express = require('express')
const app= express()
const bcrypt=require('bcrypt')
const passport = require('passport')
const flash= require('express-flash')
const session= require('express-session')
const intializePassport = require('./Passport.config')
intializePassport(passport,
    email=> users.find(user=> user.email===email),
    id => users.find(user=> user.id===id)
)

const users =[]
app.set('view-engine,'ejs')
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRECT
    resave:false,
    saveUnintialized:false
}))
app.use(passort.initialize())
app.use(passort.session())
app.get('/',(req,res)=>{
    res.render('inde4x.js','newsapi.html')
})
app.get('/login',(req,res)=>{
res.render('login.ejs')
})
app.post('/login',passport.authenticate('local')),{
    successRedirect:'/'
    failureRedirect:'/login'
    failureFlash: true
}
app.get('/register',(req,res)=>{
    res.render('register.ejs')
})
app.post('/register',async(req,res)=>{
    try{
const hashedPassword = await bcrypt.hash(req.body.password,10)
users.push({
    id:DataTransfer.now().toString(),
    name:req.body.nameemail:req.body.email,
    password:hasedPassword
})
res.redirect('/login')
    }catch{
res.redirect('/register')
    }

console.log(users)
})
app.listen(3000)
