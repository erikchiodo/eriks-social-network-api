const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought'); // How do you use this? Is how I've coded it below okay?

// Schema to create User Model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: emailValidator,
        message: "Invalid email address",
      },
    },
    thoughts: [{type : Schema.Types.ObjectId, ref: 'thought'}], //When initializing thought table, set to 'thought'
    friends: [User], //Confirm if this is accurate self-reference
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// TODO: Add a virtual called friendCount that retrieves length of the user's friends array field on query

const User = model('user', userSchema);

module.exports = User;
