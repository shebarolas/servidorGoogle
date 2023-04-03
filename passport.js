const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.ID_CLIENT,
    clientSecret: process.env.SECRET_KEY,
    callbackURL: "http://localhost:9000/auth/google/callback"
},
    function(accessToken, refreshToken, profile, done){
        const user = {
            id: profile.id,
            name: profile.displayName,
            photo: profile.photos[0].value,
            provider: profile.provider
        }
        done(null, user);
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});