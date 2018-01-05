'use strict';

const router = require('express').Router();
const passport = require('passport');
const TokenServ = require('../service/token');


/*
 * Google Login User Verification
 */

router.get('/google', passport.authenticate('google', { scope: ['email'] }));

router.get('/google/login', (req, res, next) => {
    const google = passport.authenticate('google', { scope: ['email'] }, (err, user) => {
        if (user) {
          console.log(user)
            const { emails } = user;
            const email = emails[0].value;
            const token = TokenServ.generateToken({ email });
            const htmlStr = `
              <b>Loading... Just a second</b>
              <script>
              var token = '${token}';
              localStorage.token = token;
              location.href = '/#!/todos'
              </script>
              `;
            return res.send(htmlStr);


        }
        if (err) {
            res.send(err)
        }
    });
    google(req, res, next);
});


/*
 * Facebook Login User Verification
 */


router.get('/fb',
    passport.authenticate('facebook', { scope: 'email' })
);

router.get('/fb/callback', (req, res, next) => {
    const fb = passport.authenticate('facebook', { scope: 'email' }, (err, user) => {
        if (user) {
            const email = user._json.email;
            const token = TokenServ.generateToken({ email });
            const htmlStr = `
              <b>Loading... Just a second</b>
              <script>
              var token = '${token}';
              localStorage.token = token;
              location.href = '/#!/todos'
              </script>
              `;
            return res.send(htmlStr);

        }
        if (err) {
            return res.send(err)
        }
    });

    fb(req, res, next)
})
module.exports = router;