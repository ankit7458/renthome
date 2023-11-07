const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult, body } = require('express-validator')
const User = require('../models/User')
const fetchuser = require('../middleware/fetchuserdata')

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
        const secPass = await bcrypt.hash(req.body.password, salt)
        //create User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });

        const data = {
            user: {
                id: user.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET)

        res.json({ authtoken });
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }

});

// user login Routes
router.post('/login', [
    body('email', 'Enter valid email').isEmail(),
    body('password', 'Password Should meet the length').isEmpty()
], async (req, res) => {

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials!" })
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(400).json({ error: "Try to login with correct credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

    // ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
    router.post('/getuser', fetchuser, async (req, res) => {

        try {
            userId = req.user.id;
            const user = await User.findById(userId).select("-password")
            res.send(user)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }

    });

});
    module.exports = router