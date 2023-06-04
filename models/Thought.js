const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions:[{ type: Schema.Types.ObjectId, ref: 'reaction' }],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Virtual to display reaction count
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema)

module.exports = Thought;
