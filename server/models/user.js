let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


var UserSchema = new Schema({
    fullName: {
        type: String,
        minlength: [2, "fullName must be at least 2 letters"],
        required: [true, "fullName is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: function (v) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);//returns true or false
            },
            message: 'Must be a valid email!'
        }

    },
    password: {
        type: String,
        minlength: [8, "Password must be at least 8 characters"],
        maxlength: [32, "Password cannot be longer than 32 characters"],
        required: [true, "Password is required"]
    },

    userName: {
        type: String,
        minlength: [2, "userName must be at least 2 letters"],
        required: [true, "userName is required"],
        trim: true
    },


});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10).then(hashed_password => {
        this.password = hashed_password;
        next()
    }).catch(error => {
        next()
    });
});

mongoose.model("User", UserSchema);
