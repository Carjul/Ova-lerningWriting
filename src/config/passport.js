
import passport from 'passport'
 
import {Strategy} from 'passport-local' 

import USER from '../models/user.js'

passport.use(
  new Strategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      // Match Email's User
      const user = await USER.findOne({ email: email });

      if (!user) {
        return done(null, false, { message: "Not User found." });
      } else {
        // Match Password's User
        const match = await USER.findOne({password: password});
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect Password." });
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  USER.findById(id, (err, user) => {
    done(err, user);
  });
});