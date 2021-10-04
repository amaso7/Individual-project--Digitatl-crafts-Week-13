const express = require('express')
const app = express()
const models = require('./models')
const cors = require('cors')
app.use(express.json())
const db = require('./models')
app.use(cors())
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
//local host 5000
app.listen(5000, (req, res) => {
    console.log('Server is running...')
})