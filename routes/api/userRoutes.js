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

// api/users/:userId/:friendId
  router.route("/:userId/:friendId")
  .post(addFriend) // Works
  .delete(removeFriend); // Works

module.exports = router;
