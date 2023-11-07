const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult , body } = require('express-validator')
const User = require('../models/User')

const JWT_SECRET = 'Renthome$working'

// creating user Routes
router.post('/createuser', [
    body('email', 'Enter valid email').isEmail(),
    body('password', 'Password Should meet the length').isLength({ min: 5 })
], async (req, res) => {

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    try {
        let user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.status(400).json({ error: "Sorry user with this email is already exists!" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt)
        //create User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });

        const data = {
            user :{
                id : user.id
            }
        }

        const authtoken = jwt.sign(data,JWT_SECRET)

        res.json({authtoken});
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }


});


module.exports = router