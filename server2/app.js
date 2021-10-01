const express = require('express')
const app = express()
const models = require('./models')
const cors = require('cors')
app.use(express.json())

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
app.get('/api/Drs', (req, res) => {

    models.Dr.findAll({})
    .then(drs =>{
        res.json(drs)
    })
})
app.post('/api/pts', (req, res)=>{
    const name = req.body.name
    const bithday = req.body.bithday
    const provider = req.body.provider
    const msg = req.body.msg

    const pt = models.Pts.build({
        name: name,
        bithday: bithday,
        provider: provider,
        msg: msg
    })

    pt.save()
    .then(savedPt => {
        res.json({success: true, savedPt})
    })

})
//local host 5000
app.listen(5000, (req, res) => {
    console.log('Server is running...')
})