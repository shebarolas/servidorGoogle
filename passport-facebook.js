const FacebookStrategy = require('passport-facebook');
const passport = require('passport');

passport.use(new FacebookStrategy({
    clientID: process.env.ID_CLIENT_FACEBOOK,
    clientSecret: process.env.SECRET_KEY_FACEBOOK,
    callbackURL: "http://localhost:9000/auth/facebook/callback"
},
    function(accessToken, refreshToken, profile, cb){
        const user = {
            id: profile.id,
            name: profile.displayName,
            photo: profile.photos[0].value,
            provider: profile.provider
        }
        return cb(null, user);
    }
));

passport.serializeUser((user, done) => {
    return (null, user);
});

passport.deserializeUser((user, done) => {
    return (null, user);
});
