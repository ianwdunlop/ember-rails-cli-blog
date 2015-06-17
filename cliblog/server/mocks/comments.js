module.exports = function(app) {
  var express = require('express');
  var commentsRouter = express.Router();
  var commentID = 0;
  var comments= [{id: 1, text: "First comment"}];
  commentsRouter.get('/', function(req, res) {
    res.send({
      'comments': []
    });
  });

  commentsRouter.post('/', function(req, res) {
        var newBody = req.body;
        // increment the ID
        commentID += 1;
        newBody.comment.id = commentID;
	comments.push(newBody.comment);
        res.status(201);
        res.send(newBody);
  });

  commentsRouter.get('/:id', function(req, res) {
        var thisComment;
        var found = false;
        comments.forEach(function(comment, index) {
            if (found === false && comment.id == req.params.id) {
                thisComment = comment;
                found = true;
            }
        });
        if (found === true) {
            res.send({
                'comments': {
                    id: req.params.id,
                    text: thisComment.text
                }
            });
        } else {
            res.status(404).end();
        }
  });

  commentsRouter.put('/:id', function(req, res) {
    res.send({
      'comments': {
        id: req.params.id
      }
    });
  });

  commentsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/comments', require('body-parser').json(), commentsRouter);
};
