const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router
  .route('/')
  .get(getThoughts) // Works
  .post(createThought); // Works

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought) // Works
  .put(updateThought) // Works
  .delete(deleteThought); // Not Working

  // /api/thoughts/:thoughtId/:reactionId
  router.route(":thoughtId/:reactionId")
    .post(addReaction)
    .delete(removeReaction);


module.exports = router;
