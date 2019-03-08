var friendData = require('./../data/friends')

module.exports = function (app) {
    app.get('/api/friends',function(req,res){
        res.json(friendData)
        console.log("hit the get route")
    })
    app.post('/api/friends',function(req,res){
        friendData.push(req.body);
        console.log("hit the post route")
        console.log(req.body)
        res.json(req.body)
        
    })


}

