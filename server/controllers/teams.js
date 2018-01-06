var mongoose = require('mongoose');
// var User = mongoose.model('User'); delete
var Channel = mongoose.model('Channel');
const session = require('express-session');

mongoose.Promise = global.Promise;

module.exports = {
    createChannel: function (req, res){
      console.log("inside module.exports createChannel fxn"); 
    Channel.find({channelName: req.body.channelName}, function(error, createChannel){
        if (channelName.length >= 1) {
            res.json({
                error: 'An channel with that name already exists. Please use a different channel.',
                // loggedIn: false
            });
        } else {
            var newChannel = new Channel({
                channelName: req.body.channelName,
            });
            newChannel.teams = [];
            newChannel.messages = [];      
            newChannel.save(function(err, channel) {
                if (err) {
                    console.log("new channel:", newChannel);
                    console.log("Didn't create channel and couldn't save");
                    res.json({error: err});
                } else {
                    console.log("Made it to save");
                    req.session.newChannel = newChannel;
                    console.log(req.session.newChannel);
                    res.json({channel: newChannel});
                }
            });
        }
    });
}
    
    
    

// closing module.exports below
}