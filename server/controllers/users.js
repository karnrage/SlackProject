var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = {
  show: function (req, res) {
    User.find({}, function (error, users) {
      res.render('dashboard', {users: users})
    })
  },
  // REGISTER
  register: function (req, res, err) {
    console.log("in the register method in controllers")
      if (err) {
        console.log("error");
        res.json({'error': "registration failed"})
      } else {
        var newUser = new User(req.body);
        if (req.body.password === req.body.confirmPassword) {
          newUser.save(function (err) {
            if (err) {
              console.log("something went wrong");
              console.log(err);
            } else {
              console.log("hit the save path")
              req.session.currentUser = newUser;
              console.log(req.session.currentUser)
              res.json(req.session.currentUser)
            }
          });
        } else {
          res.json({'error': "passwords did not match"})
        }
      }
  },
  // LOGIN
  login: function (req, res) {
    console.log("reached login method in controllers")
    try{
      User.findOne({email: req.body.email}, function (err, user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          console.log("hit success route on log in")
          req.session.currentUser = user
          res.json(user)  
        } else {
          console.log("password did not match email");
          res.json({'error': "password did not match the email"});
        }
      });
    }
    finally{
      console.log("hit catch in the login")
      res.json({'error': "this email is not registered"})
    }
  }
}