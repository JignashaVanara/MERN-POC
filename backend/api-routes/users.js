// import user from '../Models/users.model';
const router = require('express').Router();
// const connection = require('../Models/db')
var mongojs = require('mongojs');
var db = mongojs(process.env.MongoDB_URI, ["userlist"]);

router.get('/get-users', (req, res, next) => {
    // res.send("user get route....");
    db.userlist.find({}, (err, data) => {
        res.json(data);
        console.log(err);
    })
});

router.post('/delete-user', (req, res, next) => {
    console.log(req.body.id);
    const id = req.body.id;
    db.userlist.remove({ _id: mongojs.ObjectId(id) }, function(err, data){
        res.json(data);
        console.log(err);
    })
});

router.post('/edit-user', (req, res, next) => {
    console.log(req.body.id);
    console.log(req.body);
    const id = req.body.id;
    const query = { _id: mongojs.ObjectId(id) };
    const data = {name:req.body.name, age:req.body.age, contact:req.body.contact, country:req.body.country};
    db.userlist.findAndModify({query:query,update: {$set: data}}, function(err, data){
        res.json(data);
        console.log(err)
    })
});

router.post('/add-user', (req, res, next) => {
    console.log("inside add-user")
    console.log(req.body);
    db.userlist.insert(req.body, (err) => {
        console.log(err);
    })
})

module.exports = router;