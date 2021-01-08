const passport = require("passport");
const {Strategy} = require('passport-local');

const bcrypt = require('bcrypt');

const User = require('../models/User');

passport.use(new Strategy({usernameField:"email"},async(email,password,done) => {
    try{
      const user = await User.findOne({email});
      if(!user){
          return done(null,false,{message:"کاربری با این ایمیل ثبت نام نکرده است"});
      }
      const isMatch = await bcrypt.compare(password,user.password);
      if(isMatch){
          return done(null,user);//req.user
      } else {
          return done(null,false , {message:"نام کاربری یا کلمه ی عبور صحیح نمی باشد"});
      }
    }catch(err){
         console.log(err);
    }
  })
);
passport.serializeUser((user,done)=>{
    done(null,user);
});
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user);
    });
});