const router = require('express').Router();
let Comment = require('../models/comment.model');

router.route('/').get((req, res) => {
   Comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
   
  const discussion_title = req.body.discussion_title;
  const username = req.body.username;
  const content = req.body.content;

  const newComment = new Comment({
      discussion_title,
      username,
      content
      
  });

  newComment.save()
  .then(() => res.json('Comment added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Comment.findById(req.params.id)
    .then(comment => res.json(comment))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Comment.findById(req.params.id)
    .then(comment => {
      comment.discussion_title = req.body.discussion_title;
      comment.username = req.body.username;
      comment.content = req.body.content;
      comment.save()
        .then(() => res.json('Comment updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;