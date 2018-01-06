let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");

// public _users: Array<string> = [],
// public _messages: Array<string> = [],

var TeamSchema = new Schema({
    teamName: {
        type: String,
        minlength: [2, "channelName must be at least 2 letters"],
        maxlength: [50, "channelName cannot be longer than 50 characters"],        
        required: [true, "channelName is required"],
        trim: true,
        unique: true,
    },
    //syntax below sets up for array of users
    _users: [{
        type: String,
        // required: [true, "users is required"],
        unique: true,
        minlength: [1, "Msg must be at least 8 characters"],
        maxlength: [50, "Msg cannot be longer than 50 characters"],
    }],
    _messages: {
        type: String,
        minlength: [8, "Password must be at least 8 characters"],
        maxlength: [32, "Password cannot be longer than 32 characters"],
        required: [true, "Password is required"]
    },

});

// UserSchema.pre('save', function (next) {
//     bcrypt.hash(this.password, 10).then(hashed_password => {
//         this.password = hashed_password;
//         next()
//     }).catch(error => {
//         next()
//     });
// });

mongoose.model("Team", TeamSchema);


     // validate: {
        //     validator: function (v) {
        //         return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);//returns true or false
        //     },
        //     message: 'Must be a valid email!'
        // }