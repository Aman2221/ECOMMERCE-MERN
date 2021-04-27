const express = require('express');
const router = express.Router();
const userSchema = require('./Schema')
// const userProductModel = require('./Schema')

router.get('/', (req,res) => {
    return res.send('Hello')
})

router.post('/signup', async (req,res) => {
    const { email, password } = req.body;
    if( !email || !password){
        return res.status(401).json({error : 'All field required'})
    }
    const User = new userSchema({ email, password});
    const validEmail = await userSchema.findOne({email : email});

    if(validEmail){
        res.status(401).json({error : 'email already exsist'})
    }
    else {
        User.save().then(() => {
        res.status(201).json({message : 'successfull'})
        }).catch((e) => {
            res.status(401).json({error : 'error while sending data'})
        })
    }
})

router.post('/login', async (req,res) => {
    const { email, password} = req.body;

    if( !email || !password){
        res.status(401).json({error : 'Please fill all fields'})
    }

    const isMatch = await userSchema.findOne({email : email});

    if(isMatch){
        if(password === isMatch.password){
            res.status(201).json({message : 'Login Successfull'})
        }
    }
    else {
        res.status(401).json({error : 'No record corresponding to this user'})
    }
})

router.get('/getData', (req, res) => {
    userSchema.find((err, data) => {
         if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

// router.get('/getProductData',(req,res) => {
//     userProductModel.find((err, data) => {
//         if(err){
//             res.status(401).send(err)
//         }
//         else{
//             res.status(201).send(data);
//         }
//     })
// })
module.exports = router;