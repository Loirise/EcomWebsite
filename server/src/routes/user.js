const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');

/* create user */
router.post('/register', async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, (err) => {
            if (err) { return next(err) }
            res.status(200).send('Account created.')
        });
    } catch(e) {
        console.log(e.message)
        if(e.message == 'No username was given'){
            return res.status(400).send("No username was given.")
        }
        if(e.message == 'No password was given'){
            return res.status(400).send("No password was given.")
        }
        if(e.message == 'User validation failed: email: Path `email` is required.'){
            return res.status(400).send("Email is required.")
        }
        if(e.message.substring(65,70) == 'email'){
            return res.status(400).send("Email already in use.")
        }
        return res.status(400).send("Something went wrong.")
    };
});

/* log in */
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
    res.status(200).send('User logged in.')
});

/* log out */
router.post('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {return next(err)}
    res.status(200).send('User logged out.')
    });
});


module.exports = router;