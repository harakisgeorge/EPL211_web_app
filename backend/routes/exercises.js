const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
   const description = req.body.description;
   const choice_a = req.body.choice_a;
   const choice_b = req.body.choice_b;
   const choice_c = req.body.choice_c;
   const choice_d = req.body.choice_d;
   const type = Number(req.body.type);
   const tags = Array(req.body.tags);
   const correctChoice = Number(req.body.correctChoice);
   const numberOfCorrect = Number(req.body.numberOfCorrect);
   const numberOfWrong = Number(req.body.numberOfWrong);

   const newExercise = new Exercise({
    description,
    choice_a,
    choice_b,
    choice_c,
    choice_d,
    type,
    tags,
    correctChoice,
    numberOfCorrect,
    numberOfWrong

  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/solve/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.description = req.body.description;
      exercise.choice_a = req.body.choice_a;
      exercise.choice_b = req.body.choice_b;
      exercise.choice_c = req.body.choice_c;
      exercise.choice_d = req.body.choice_d;      
      exercise.type = Number(req.body.type);
      exercise.tags = Array(req.body.tags);
      exercise.correctChoice = Number(req.body.correctChoice);
      exercise.numberOfCorrect = Number(req.body.numberOfCorrect);
      exercise.numberOfWrong = Number(req.body.numberOfWrong);
      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;