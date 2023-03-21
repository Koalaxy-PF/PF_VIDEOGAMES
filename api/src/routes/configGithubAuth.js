const passport = require("passport");
const { Strategy }=require("passport-github2");
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_CALBACK_URL } = process.env

const strategyGithub = passport.use(
    "auth-github",
    new Strategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: GITHUB_CALBACK_URL,
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

module.exports = strategyGithub;