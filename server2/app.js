const express = require('express')
const app = express()
const models = require('./models')
const cors = require('cors')
app.use(express.json())
const db = require('./models')
app.use(cors())
const router=express.Router()
const bcrypt = require('bcrypt')
const authenticate=require('../server2/authentication/authenticate')

/*
const pgp = require('pg-promise')()
const connectionString = 'postgres://fxyqgzxg:i66ItBKFaiFO581GDTU_YGxpIDwbjsRQ@fanny.db.elephantsql.com/fxyqgzxg'

const db = pgp(connectionString)
app.get('/hello', (req, res) => {
    res.send('Hello ')
})
app.get('/api/drs-with-pg-promise', (req, res) =>{

})
*/

app.post('/api/Pts', (req, res)=>{
    const name = req.body.name
    const dob = req.body.dob
    const provider = req.body.provider
    const prevappt = req.body.prevappt 
    const nextappt = req.body.nextappt 
    const meds = req.body.meds
    const num = req.body.num
    const msg = req.body.msg

    const pt = models.Pt.build({
        name: name,
        dob: dob,
        provider: provider,
        prevappt: prevappt,
        nextappt: nextappt,
        meds: meds,
        num: num,  
        msg: msg
    })

    pt.save()
    .then(savedPt => {
        res.json({success: true, ptId: savedPt.id})
    })

})
app.get('/api/pts', (req, res) => {

    models.Pt.findAll({})
    .then(pts =>{
        res.json(pts)
    })
})

app.delete('/api/pts/:ptId', (req, res) => {

    const ptId = parseInt(req.params.ptId) 

    models.Pt.destroy({
        where: {
            id: ptId
        }
    }).then(deletedPt => {
        res.json({success: true})
    })

})
router.post('/login',(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    models.User.findOne({
        where:{
            username:username
        }
    })
    .then(user=>{
        bcrypt.compare(password,user.password,function(error,result){
            if(result){
                if(req.session){
                    req.session.user_id=user.id
                    req.session.username=user.username
                }
                console.log("User successfully logged in! On user homepage")
                res.redirect('/users/home')
            }else{
                //render the login/create account page with error message
                console.log("Invalid username or password! Reload login page")
                res.render('login',{message:'Invalid username or password!'})
            }
        })
    })
})
router.get('/logout', authenticate, (req, res) => {
    req.session.destroy(function (error) {
        res.clearCookie('connect.sid')
        res.redirect('/')
    })
})
//local host 5000
app.listen(5000, (req, res) => {
    console.log('Server is running...')
})