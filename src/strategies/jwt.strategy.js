const { JWT_KEY } = require('../config');

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = JWT_KEY;

const strategy = new JwtStrategy(opts, function (jwt_payload, done) {
  return done(null, jwt_payload);
});

module.exports = strategy;