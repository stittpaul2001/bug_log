import { Schema } from "mongoose";

export const BugSchema = new Schema({

  title: { type: String, minlength: 10, maxlength: 50, required: true },
  description: { type: String, minlength: 10, maxlength: 500, required: true },
  priority: { type: Number, minlegth: 1, maxlength: 5, required: true },
  closed: { type: Boolean, required: true, default: false },
  closedDate: { type: Date },
  creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

BugSchema.virtual('creator', {
  ref: 'Account',
  localField: 'creatorId',
  foreignField: '_id',
  justone: true,
  options: { select: 'name picture' }
})