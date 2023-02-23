var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
var Manager = require('../../models/manager');

function Token(data) {
    return 'Bearer ' + jwt.sign(
        JSON.parse(JSON.stringify(data)),
        'secret000',
        {
            expiresIn: 60 * 5
        }
    )
}

// login or register
router.post('/login', async function (req, res) {
    let info = req.body;
    //username password is not null
    if (info.username === '' || info.password === '') {
        res.json({
            status: 'error',
            msg: 'one line could not be null'
        })
        return
    }
    //check username
    let isUser = await Manager.find({username: info.username}).catch((err) => {
        console.log(err)
    })
    if (isUser.length === 0) {
        let Manager1 = new Manager({
            username: info.username,
            password: info.password
        })
        let data = await Manager1.save().catch((err) => {
            console.log(err)
        })
        const token = Token(data)
        res.json({
            status: 'create ok',
            data: {token: token}
        })
    } else {
        //check password
        if (isUser[0].password === info.password) {
            const token = Token(isUser[0])
            res.json({
                status: 'login ok',
                data: {token: token}
            })
        } else {
            res.json({
                status: 'error',
                msg: 'wrong password'
            })
        }
    }

})
router.get('/user', function (req, res) {
    Manager.find({}, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            res.json({
                status: 'ok',
                data: data,
                tokeninfo: req.auth
            })
        }
    })
})
// create new activity
router.post('/createActivity', function (req, res) {
    let info = req.body

})

module.exports = router;
