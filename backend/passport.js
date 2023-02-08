const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "982958489394-tsqc1u42i60e4d9qcghbhuu1i23cp3b4.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "c7191464fd49ed8476b2";
GITHUB_CLIENT_SECRET = "82218119490d38b9dfac37965cc9adb80fea761b";

FACEBOOK_APP_ID = "1140330923413975";
FACEBOOK_APP_SECRET = "eedf759be0ce688675a62dd7310df3c2";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
