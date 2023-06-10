const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
router
  .route('/')
  .get(getUsers) // Works
  .post(createUser); // Works

// /api/users/:userId
router
  .route("/:userId")
  .get(getSingleUser) // Works
  .delete(deleteUser) // Works
  .put(updateUser); // Works

// // /api/users/:userId/thoughts
// router
//   .route("/:userId/thoughts")
//   .post(addThought);

// // /api/users/:userId/thoughts/:thoughtId
// router
//   .route("/:userId/thoughts/:thoughtId")
//   .delete(removeThought);

// api/users/:userId/:friendId
  router.route("/:userId/:friendId")
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
