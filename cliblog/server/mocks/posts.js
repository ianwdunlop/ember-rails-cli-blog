module.exports = function(app) {
    var express = require('express');
    var postsRouter = express.Router();
    // we already have posts with ID 1 & 2
    var postID = 2;
    var posts = [{
        id: 1,
        title: 'First Post',
	comments: [1]
    }, {
        id: 2,
        title: 'Second Post'
    }];

    postsRouter.get('/', function(req, res) {
        res.send({
            'posts': posts
        });
    });

    postsRouter.post('/', function(req, res) {
        var newBody = req.body;
        // increment the ID
        postID += 1;
        newBody.post.id = postID;
	posts.push(newBody.post);
        res.status(201);
        res.send(newBody);
        //res.status(201).end();

    });

    postsRouter.get('/:id', function(req, res) {
        var thisPost;
        var found = false;
        posts.forEach(function(post, index) {
            if (found === false && post.id == req.params.id) {
                thisPost = post;
                found = true;
            }
        });
        if (found === true) {
            res.send({
                'posts': {
                    id: req.params.id,
                    title: thisPost.title,
		    comments: thisPost.comments
                }
            });
        } else {
            res.status(404).end();
        }
    });

    postsRouter.put('/:id', function(req, res) {
        res.send({
            'posts': {
                id: req.params.id
            }
        });
    });

    postsRouter.delete('/:id', function(req, res) {
        res.status(204).end();
    });

    //app.use('/api/posts', postsRouter);
    app.use('/api/posts', require('body-parser').json(), postsRouter);
};
