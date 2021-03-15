const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const TwitchStrategy = require("passport-twitch").OAuth2Strategy;
const User = require("../models/User.model")

function google(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    async (accessToken, refreshToken, profile, callback) => {
        const newUser = {
            loginId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            profilePicture: profile.photos[0].value,
            locale: profile.locale,
        }

        try {
            let user = await User.findOne({ loginId: profile.id })

            if(user) {
                callback(null, user)
            } else {
                user = await User.create(newUser)
                callback(null, user)
            }
        } catch(err) {
            console.log(err)
        }
    }));
    
    passport.serializeUser((user, callback) => {
        callback(null, user.id)
    })
    
    passport.deserializeUser((id, callback) => {
        User.findById(id, (err, user) => {
            callback(err, user)
        })
    })
}

function facebook(passport) {
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK
    },
    async (accessToken, refreshToken, profile, callback) => {
        const newUser = {
            loginId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName || profile.displayName.split(" ")[0],
            lastName: profile.name.familyName || profile.displayName.split(" ")[profile.displayName.split(" ").length-1],
        }

        try {
            let user = await User.findOne({ loginId: profile.id })

            if(user) {
                callback(null, user)
            } else {
                user = await User.create(newUser)
                callback(null, user)
            }
        } catch(err) {
            console.log(err)
        }
    }));
    
    passport.serializeUser((user, callback) => {
        callback(null, user.id)
    })
    
    passport.deserializeUser((id, callback) => {
        User.findById(id, (err, user) => {
            callback(err, user)
        })
    })
}

function twitch(passport) {
    passport.use(new TwitchStrategy({
        clientID: process.env.TWITCH_CLIENT_ID,
        clientSecret: process.env.TWITCH_SECRET,
        callbackURL: process.env.TWITCH_CALLBACK,
        scope: "user_read"
    },
    async (accessToken, refreshToken, profile, callback) => {
        console.log(profile);
        const newUser = {
            loginId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName || profile.displayName.split(" ")[0],
            lastName: profile.name.familyName || profile.displayName.split(" ")[profile.displayName.split(" ").length-1],
        }

        try {
            let user = await User.findOne({ loginId: profile.id })

            if(user) {
                callback(null, user)
            } else {
                user = await User.create(newUser)
                callback(null, user)
            }
        } catch(err) {
            console.log(err)
        }
    }));
    
    passport.serializeUser((user, callback) => {
        callback(null, user.id)
    })
    
    passport.deserializeUser((id, callback) => {
        User.findById(id, (err, user) => {
            callback(err, user)
        })
    })
}

module.exports = {
    google,
    facebook,
    // twitter,
    twitch
}