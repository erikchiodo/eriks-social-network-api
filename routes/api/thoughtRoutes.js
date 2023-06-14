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
  .delete(deleteThought); // Works

  // /api/thoughts/:thoughtId/reactions
  router.route("/:thoughtId/reactions")
    .post(addReaction)
  
  // /api/thoughts/:thoughtId/reactions/:reactionId
  router.route("/:thoughtId/reactions/:reactionId")
    .delete(removeReaction);

module.exports = router;
