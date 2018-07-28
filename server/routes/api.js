

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');



//mongoose promise
mongoose.Promise = global.Promise;

//Connect mongoose
mongoose.connect(db, function(err){
    if(err){
        console.log('Connection error');
    } else{
        console.log('Connceted succesfully');
    }
});

//Get the posts and cathc the errors
router.get('/posts', function(req,res){

    console.log('requesting');
    post.find({})
        .exec(function(err, posts){
            if(err){
                console.log('Error getting the posts');
            } else{
                res.json(posts);
                console.log(posts);
            }
        });
});

router.get('/details/:id', function(req, res){

    console.log('requesting post');

    post.findById(req.params.id)
        .exec(function(err, post){
            if(err){
                console.log('Error getting the post');
            }else{
                console.log(req.params.id);
                res.json(post);
                console.log(post);
            }
        });
});

router.post('/posts', function(req, res){
    console.log('posting');

    var newPost = new post();

    newPost.title = req.body.title;
    newPost.url = req.body.url;
    newPost.desc = req.body.desc;

    newPost.save(function(err, addedPost){
        if(err){
            console.log('error inserting');
        }else{
            res.json(addedPost);
        }
    });

});

module.exports = router;
