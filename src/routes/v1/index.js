const express = require("express");
const schema = require("../../schemas/user");
const router = express.Router();
const Boom = require("@hapi/boom");
const databaseUsers = require("../../data");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const passport = require("passport");

const createVersionOne = (app) => {
  app.use('/v1', router);
  
  //login
  router.post('/login', async (req, res, next) => {
    
    const { username, password } = req.body;
    const user = databaseUsers.find((user) => {
      return user.username = username;
    });
    if(!user){
      return next(new Boom.badData('user not found'));
    }
    const pass = await bcrypt.compareSync(password , user.password);
    if(!pass){
      return next(new Boom.unauthorized());
    }
    const token = jsonwebtoken.sign({ username }, process.env.KEY_SECRET, { algorithm: 'HS256', expiresIn: 60 });
    res.json({token});
});

  //register
  router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    debugger 
    const newUser = {
      username,
      password
    };
    try {
      const userValidate = schema.validate(newUser);
      if (!userValidate.error) {
        const salt = await bcrypt.genSalt(10);
        const passEncrypt = await bcrypt.hash(password, salt); 
        newUser.password = passEncrypt;
        databaseUsers.push(newUser);
        console.log(databaseUsers);
        res.status(200).json({message: 'user register!'}).send();
      }
    } catch (error) {
      Boom.badImplementation(error);
    }
  })

  // Get users
  router.get('/getUsers', passport.authenticate('jwt', { session: false }), (req, res) => { 
    res.json(databaseUsers);
  })
}


module.exports = {
  createVersionOne
} 