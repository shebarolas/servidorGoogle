const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const { session } = require('passport');
const cors = require('cors');
require('../passport');
require('../passport-facebook');
const authGoogle = require('../router/auth.routes');

class Server {

    constructor(){
        this.app = express();
        this.pathAuth = '/auth';

        this.middleware();
        this.routes();
       
    }

    middleware(){
        this.app.use(cookieSession({
            name: "session",
            keys: ["logito"],
            maxAge: 3000*20000000
        }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.use(cors({
            origin: 'http://localhost:3000',
            methods: 'GET,POST,PUT,DELETE',
            credentials: true
        }));
    }

    routes(){
        this.app.use(this.pathAuth, authGoogle);
    }

    listen() {
        this.app.listen(9000, () => {
            console.log('listening on http://localhost:9000');
        });
    }

}

module.exports = Server;