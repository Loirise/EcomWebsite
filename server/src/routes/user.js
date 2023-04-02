const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const createToken = (username, email) => {
    return jwt.sign({username, email}, process.env.SECRET, { expiresIn: '2d'});
}

/* create user */
router.post('/register', async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, (err) => {
            if (err) { return next(err) }
            const token = createToken(username)
            res.status(200).json({username, token})
        });
    } catch(e) {
        if(e.message == 'No username was given'){
            return res.status(400).json("No username was given.")
        }
        if(e.message == 'A user with the given username is already registered'){
            return res.status(400).json("A user with the given username is already registered")
        }
        if(e.message == 'No password was given'){
            return res.status(400).json("No password was given.")
        }
        if(e.message == 'User validation failed: email: Path `email` is required.'){
            return res.status(400).json("Email is required.")
        }
        if(e.message.substring(65,70) == 'email'){
            return res.status(400).json("Email already in use.")
        }
        return res.status(400).json("Something went wrong."+ e.message)
    };
});

/* log in */
router.post('/login', function(req, res, next) {

    passport.authenticate('local', function(err, user, info) {
      if (err) { 
        return next(err); }

      if (!user) { 
        return res.status(401).json('Wrong username or password') }
  
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        const { username } = req.body;
        const token = createToken(username);
        res.status(200).json({username, token});
      });
  
    })(req, res, next);
  
  })

/* log out */
router.post('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {return next(err)}
    res.status(200).json('User logged out.')
    });
});


module.exports = router;