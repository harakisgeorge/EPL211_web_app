const router = require('express').Router();
let Discussion = require('../models/discussion.model');

router.route('/').get((req, res) => {
  Discussion.find()
    .then(discussions => res.json(discussions))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const username = req.body.username;
  const description = req.body.description;

  const newDiscussion = new Discussion({
      title,
      username,
      description,
      
  });

  newDiscussion.save()
  .then(() => res.json('Discussion added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Discussion.findById(req.params.id)
    .then(discussion => res.json(discussion))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Discussion.findByIdAndDelete(req.params.id)
    .then(() => res.json('Discussion deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Discussion.findById(req.params.id)
    .then(discussion => {
      discussion.title = req.body.title;
      discussion.username = req.body.username;
      discussion.description = req.body.description;
      discussion.save()
        .then(() => res.json('Discussion updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;