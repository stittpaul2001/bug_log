import { Schema } from "mongoose";


export const NoteSchema = new Schema({

  body: { type: String, minlength: 5, maxlength: 500 },
  bugId: { type: Schema.ObjectId, required: true, ref: 'Bug' },
  creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },
},

  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

NoteSchema.virtual('creator', {
  ref: 'Account',
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  options: { select: 'name picture' }

})