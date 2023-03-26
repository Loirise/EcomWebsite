const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bodyParser = require('body-parser');

const productsRouter = require('./routes/products');
const userRouter = require('./routes/user')
const User = require('./models/user');

const app = express();
const db = mongoose.connection;
dotenv.config();

/* env variables */
const port = process.env.PORT;
const dbUrl = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecomshop';
const secret = process.env.SECRET;

/* session config */
const sessionConfig = {
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

/* middleware */
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


/* routes */
app.use('/products', productsRouter);
app.use('/', userRouter);


mongoose.connect(dbUrl)
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('=== DATABASE CONNECTED ===');
    app.listen(port, () => {
        console.log(`=== LISTENING ON PORT ${port} ===`);
    });
});

