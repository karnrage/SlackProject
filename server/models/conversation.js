let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// const bcrypt = require("bcrypt");


var ConversationSchema = new Schema({
    conversationName: {
        type: String,
        minlength: [2, "conversationName must be at least 2 letters"],
        maxlength: [50, "conversationName cannot be longer than 50 characters"],        
        // required: [true, "conversationName is required"],
        trim: true,
        unique: true,
    },    
    _user: {
        type: Schema.Types.ObjectId, ref: 'User',
        // minlength: [8, "Password must be at least 8 characters"],
        // maxlength: [32, "Password cannot be longer than 32 characters"],
        // required: [true, "Password is required"]
    },
    messageList: [{
        // subject: {type: String},
        content: {type: String},
        sender: {type: Schema.Types.ObjectId},
        // recipient: {type: Schema.Types.ObjectID},
        sentAt: {type: Date, default: Date.now()},
    }]
});

// UserSchema.pre('save', function (next) {
//     bcrypt.hash(this.password, 10).then(hashed_password => {
//         this.password = hashed_password;
//         next()
//     }).catch(error => {
//         next()
//     });
// });

mongoose.model("Conversation", ConversationSchema);


     // validate: {
        //     validator: function (v) {
        //         return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);//returns true or false
        //     },
        //     message: 'Must be a valid email!'
        // }